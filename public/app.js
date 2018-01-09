new Vue({
  el: '#trade-form',
  data: {
    pnl_limit: '-200',
    target_profit: '10',
    size:'0.1',
    buy_coinprice:'1651250',
    leverage: 15
  },
  computed: {
    buy_price: {
      get: function () {
        return parseInt(this.buy_coinprice) * parseFloat(this.size)
      },
      set: function (value) {
        this.buy_coinprice = parseInt(value / parseFloat(this.size))
      }
    },
    sell_price: {
      get: function () {
        return this.buy_price + parseInt(this.target_profit)
      },
      set: function (value) {
        this.buy_price = value - parseInt(this.target_profit)
      }
    },
    sell_coinprice: {
      get: function () {
        return parseInt(this.sell_price / parseFloat(this.size))
      },
      set: function (value) {
        this.sell_price = parseInt(value) * parseFloat(this.size)
      }
    }, 
    trigger_price_ask: {
      get: function () {
        return this.sell_price + parseInt(this.pnl_limit)
      }
    },  
    trigger_coinprice_ask: {
      get: function () {
        return parseInt(this.trigger_price_ask / parseFloat(this.size))
      }
    }, 
    trigger_price_bid: {
      get: function () {
        return this.buy_price + parseInt(this.pnl_limit)
      }
    },  
    trigger_coinprice_bid: {
      get: function () {
        return parseInt(this.trigger_price_bid / parseFloat(this.size))
      }
    }, 
    require_collateral_ask: {
      get: function () {
        return parseInt(this.sell_price / parseInt(this.leverage))
      }
    },
    require_collateral_bid: {
      get: function () {
        return parseInt(this.buy_price / parseInt(this.leverage))
      }
    },
  },
  methods: {
    submit: function (method) {
      var form = document.getElementById('trade-form');
      form.setAttribute('action', method);
      form.submit();
    }
  }
});

new Vue({
  el: '.js-component08',
  data: {
    origin: '100'
  },
  computed: {
    withTax: {
      get: function () {
        return parseInt(this.origin * 1.08)
      },
      set: function (value) {
        this.origin = Math.ceil(value / 1.08);
      }
    }
  }
});
  new Vue({
    el: '.js-component11',
    data: {
      data: [
        'hoge',
        'huga',
        'piyo',
        'punyo'
      ]
    },
    created: function () {
      this.flag = true;
    }
  });
