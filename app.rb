require 'sinatra'
require 'sinatra/reloader'
require 'rack/flash'
require './models/bitflyer.rb'
enable :sessions
use Rack::Flash

get '/' do
  p flash[:api_key]
  
    # API
    @api_key = flash[:api_key] if flash[:api_key] 
    puts "api_key=#{@api_key}"
    @api_secret_key = flash[:api_secret_key] if flash[:api_secret_key] 
    # Account
    @collateral = 1248
    @total_require_collateral = 663
    @leverage = 15

    # Trade
    @pnl_limit = -100
    @target_profit = 10
    @size = 0.001
    @buy_coinprice = 1651250
    buy_price = @buy_coinprice * @size
    sell_price = buy_price + @target_profit
    @sell_coinprice = (sell_price / @size).to_i
    trigger_price = buy_price + @pnl_limit
    @trigger_coinprice = (trigger_price / @size).to_i
    @require_collateral = (buy_price / @leverage).to_i

    erb :index
end

post '/ask' do
    flash[:api_key] = params[:api_key]
    flash[:api_secret_key] = params[:api_secret_key]

    p flash[:api_key]

    api = BitFlyerAPI.new flash[:api_key], flash[:api_secret_key]
    p api.collatera

    redirect "/"

=begin

    # Account
    @collateral = 1248
    @total_require_collateral = 663
    @leverage = 3

    # Trade
    @pnl_limit = -100
    @target_profit = 10
    @size = 0.001
    @buy_coinprice = 1651250
    buy_price = @buy_coinprice * @size
    sell_price = buy_price + @target_profit
    @sell_coinprice = (sell_price / @size).to_i
    trigger_price = buy_price + @pnl_limit
    @trigger_coinprice = (trigger_price / @size).to_i
    @require_collateral = (buy_price / @leverage).to_i

    erb :index
=end
end