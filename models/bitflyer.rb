class BitFlyerAPI
    require "net/http"
    require "uri"
    require "openssl"
    require 'json'
    
    def initialize key, secret
      @key = key
      @secret = secret
    end
  
    def call_api(key, secret, method, uri, body="")
      timestamp = Time.now.to_i.to_s
  
      text = timestamp + method + uri.request_uri + body
      sign = OpenSSL::HMAC.hexdigest(OpenSSL::Digest.new("sha256"), secret, text)
  
      options = if method == "GET"
        Net::HTTP::Get.new(uri.request_uri, initheader = {
          "ACCESS-KEY" => key,
          "ACCESS-TIMESTAMP" => timestamp,
          "ACCESS-SIGN" => sign,
        });
      else
        Net::HTTP::Post.new(uri.request_uri, initheader = {
          "ACCESS-KEY" => key,
          "ACCESS-TIMESTAMP" => timestamp,
          "ACCESS-SIGN" => sign,
          "Content-Type" => "application/json"
        });
      end
      options.body = body if body != ""
  
      https = Net::HTTP.new(uri.host, uri.port)
      https.use_ssl = true
      response = https.request(options)
      
      JSON.parse(response.body)
    end
  
    def collatera
      uri = URI.parse("https://api.bitflyer.jp")
      uri.path = "/v1/me/getcollateral"
  
      call_api(@key, @secret, "GET", uri)
    end
  
    def positions(product_code)
      uri = URI.parse("https://api.bitflyer.jp")
      uri.path = "/v1/me/getpositions"
      uri.query = "product_code=" + product_code
  
      call_api(@key, @secret, "GET", uri)
    end
    
    def executions(product_code)
      uri = URI.parse("https://api.bitflyer.jp")
      uri.path = '/v1/executions'
      uri.query = 'product_code=FX_BTC_JPY'
      
      call_api(@key, @secret, "GET", uri)   
    end
    
    def sendparentorder size, buy_price, sell_price, trigger_price
      uri = URI.parse("https://api.bitflyer.jp")
      uri.path = "/v1/me/sendparentorder"
      params = {
        "order_method"=>"IFD", 
        "minute_to_expire"=>10000, 
        "time_in_force"=>"GTC", 
        "parameters"=>[
          {
            "product_code"=>"FX_BTC_JPY", 
            "condition_type"=>"LIMIT", 
            "side"=>"BUY", 
            "price"=>buy_price, 
            "size"=>size
          }, 
          {
            "product_code"=>"FX_BTC_JPY", 
            "condition_type"=>"STOP_LIMIT", 
            "side"=>"SELL", 
            "price"=>sell_price, 
            "trigger_price"=>trigger_price, 
            "size"=>size
          }
        ]
      }
  
      body = JSON.generate(params)
      call_api(@key, @secret, "POST", uri, body)
    end
end