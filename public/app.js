new Vue({
  el: '.trade-form',
  data: {
    pnl_limit: '-200',
    target_profit: '10',
    size:'0.001',
    buy_coinprice:'1651250',
    leverage: 15
  },
  computed: {
    buy_price: {
      get: function () {
        return this.buy_coinprice * this.size
      },
      set: function (value) {
        //this.origin = Math.ceil(value / 1.08);
      }
    },
    sell_price: {
      get: function () {
        console.log(this.buy_price);
        console.log(this.target_profit);
        return this.buy_price + this.target_profit
      },
      set: function (value) {
        //this.origin = Math.ceil(value / 1.08);
      }
    },
    sell_coinprice: {
      get: function () {
        console.log(this.sell_price);
        console.log(this.size);
        return this.sell_price / this.size
      },
      set: function (value) {
        //this.origin = Math.ceil(value / 1.08);
      }
    },  
    trigger_price: {
      get: function () {
        return parseInt(this.buy_price + this.pnl_limit)
      },
      set: function (value) {
        //this.origin = Math.ceil(value / 1.08);
      }
    },  
    trigger_coinprice: {
      get: function () {
        return parseInt(this.trigger_price / this.size)
      },
      set: function (value) {
        //this.origin = Math.ceil(value / 1.08);
      }
    }, 
    require_collateral: {
      get: function () {
        return parseInt(this.buy_price / this.leverage)
      },
      set: function (value) {
        //this.origin = Math.ceil(value / 1.08);
      }
    },
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