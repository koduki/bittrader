new Vue({
    el: '.js-component01',
    data: {
      text: 'テキストテキストテキスト'
    }
});

new Vue({
    el: '.js-component02',
    data: {
      text2: ''
    }
});

new Vue({
    el: '.js-component03',
    data: {
      input: '',
      text: ''
    },
    methods: {
      output: function () {
        this.text = this.input;
      }
    }
  });

  new Vue({
    el: '.js-component04',
    data: {
      input: '',
      html: ''
    },
    methods: {
      output: function () {
        this.html = '<span style="color: #fc0;">' + this.input + '</span>';
      }
    }
  });

  new Vue({
    el: '.js-component05',
    data: {
        number: ''
    }
  });

  new Vue({
    el: '.js-component06',
    data: {
      text: ''
    },
    filters: {
      toUpperCase: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.toUpperCase()
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
