require 'pubnub'


pubnub = Pubnub.new(
    subscribe_key: 'sub-c-52a9ab50-291b-11e5-baaa-0619f8945a4f'
)

callback = Pubnub::SubscribeCallback.new(
    message:  ->(envelope) { 
        puts "MESSAGE: #{envelope.result[:data]}"
    },
    presence: ->(envelope) {
        puts "PRESENCE: #{envelope.result[:data]}"
    },
    status:   lambda do |envelope|
        puts "\n\n\n#{envelope.status}\n\n\n"
 
        if envelope.error?
            puts "ERROR! #{envelope.status[:category]}"
        else
            puts 'Connected!' if envelope.status[:last_timetoken] == 0 # Connected!
            pubnub.publish(
                channel: :lightning_board_snapshot_BTC_JPY, 
                message: 'Connected!'
            )
        end
    end
)
pubnub.add_listener(callback: callback)
puts 'hello'
pubnub.subscribe(
    channels: :lightning_board_snapshot_BTC_JPY
)

sleep(3600)