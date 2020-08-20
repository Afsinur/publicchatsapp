window.addEventListener("load", () => {
  var button_controls = {
    posts_per_page: 5, // Alhamdulillah this is editable.. //(posts)
    show_button_s1: 5, // Alhamdulillah this is editable.. //(buttons)
    min_sButtons: 5, //Alhamdulillah this is editable..    //(default:5)
  };
  var body = document.body;
  var html = document.documentElement;
  var html_and_body = body && html;
  var scrollTopFunction = () => {
    console.log("scrollTopFunction()");
    html_and_body.scrollTop = 0;
  };
  new Vue({
    el: "#app",
    data: {
      posts: news_posts,
      buttons: [],
      showPosts: [],
      button_conditions: {
        lst_button_value: "",
        fst: false,
        lst: false,
        noWarning: true,
        curent_button: 1,
        activeButtonStyle: {
          color: "#fff",
          background: "#303030",
        },
      },
    },
    methods: {
      make_buttons() {
        var length_of_posts = this.posts.length;
        var dividing_length_of_posts = Math.ceil(
          length_of_posts / button_controls.posts_per_page
        );
        var button_s = button_controls.show_button_s1;
        this.button_conditions.lst_button_value = dividing_length_of_posts;
        //making custom buttons..
        if (dividing_length_of_posts > button_s) {
          console.log(`${button_s} er boro =`, dividing_length_of_posts);
          //making custom buttons with fst and lst..
          if (button_s >= button_controls.min_sButtons) {
            this.button_conditions.lst = true;
            for (let x = 1; x <= button_controls.show_button_s1 - 1; x++) {
              this.buttons.push(x);
            }
          } else {
            var alert_or_log_message = `Warning: {{ (button_controls.show_button_s1), this value can not be less than ${button_controls.min_sButtons}! / You can not get less than ${button_controls.min_sButtons} buttons!}}.`;
            alert(alert_or_log_message);
            console.log(alert_or_log_message);
            this.button_conditions.noWarning = false;
          }
        } else {
          console.log(`${button_s} er choto/soman =`, dividing_length_of_posts);
          var reArragnged = Math.abs(
            Math.ceil(this.posts.length / button_controls.show_button_s1)
          );
          console.log(reArragnged, dividing_length_of_posts);
          var warnFor_auto_adjust_posts = `Alhamdulillah, you want ${button_controls.show_button_s1} buttons, and that can not give your desired ${button_controls.posts_per_page} posts because it does not go perfect with buttons and posts calculation. App is auto-genareting ${reArragnged} posts, that goes perfect with ${button_controls.show_button_s1} buttons!`;
          console.log(warnFor_auto_adjust_posts);
          button_controls.posts_per_page = reArragnged;
          dividing_length_of_posts = button_controls.show_button_s1;
          //making buttons..for loop..
          for (let x = 1; x <= dividing_length_of_posts; x++) {
            this.buttons.push(x);
          }
        }
      },
      show_default_posts() {
        this.showPosts = [];
        var e_1 = 1;
        var e_up = e_1 * button_controls.posts_per_page;
        var e_down = e_up - (button_controls.posts_per_page - 1);
        this.posts.forEach((post, i) => {
          var extra_i_work = i + 1;
          if (extra_i_work <= e_up && extra_i_work >= e_down) {
            this.showPosts.push(post);
          }
        });
      },
      show_posts(e) {
        scrollTopFunction();
        this.showPosts = [];
        var e_1 = e + 1;
        this.button_conditions.curent_button = e_1;
        //make buttons again..
        if (
          this.button_conditions.lst_button_value >
          button_controls.show_button_s1
        ) {
          if (e_1 < button_controls.show_button_s1 - 1) {
            this.button_conditions.fst = false;
            this.button_conditions.lst = true;
            console.log(button_controls.show_button_s1 - 1);
            var odd_buttons_counteruper_one = 1;
            this.buttons = [];
            while (
              odd_buttons_counteruper_one <=
              button_controls.show_button_s1 - 1
            ) {
              console.log(odd_buttons_counteruper_one);
              this.buttons.push(odd_buttons_counteruper_one);
              odd_buttons_counteruper_one++;
            }
          } else {
            console.log(
              `This button's value is bigger than or same = ${
                button_controls.show_button_s1 - 1
              }`
            );
            console.log(`${button_controls.show_button_s1 - 2}`);
            this.button_conditions.fst = true;
            if ((button_controls.show_button_s1 - 2) % 2 == 0) {
              console.log("jor");
              var divide_from_even_number =
                (button_controls.show_button_s1 - 2) / 2;
              console.log(
                `pichone jog korte hbe ${divide_from_even_number - 1}`,
                1,
                `button jog korte hbe ${divide_from_even_number}`
              );
              var even_add = e_1 + divide_from_even_number;
              var even_minus = e_1 - (divide_from_even_number - 1);
              var difference_from_last_even = Math.abs(
                this.button_conditions.lst_button_value - even_add
              );
              if (even_add < this.button_conditions.lst_button_value) {
                console.log(this.button_conditions.lst_button_value);
                this.button_conditions.lst = true;
              } else {
                this.button_conditions.lst = false;
                even_minus = even_minus - (difference_from_last_even + 1);
                even_add = this.button_conditions.lst_button_value;
              }
              console.log(even_minus, even_add, difference_from_last_even);
              var even_buttons_counter = even_minus;
              this.buttons = [];
              while (
                even_buttons_counter >= even_minus &&
                even_buttons_counter <= even_add
              ) {
                if (
                  even_buttons_counter >= even_minus &&
                  even_buttons_counter <= even_add
                ) {
                  console.log(even_buttons_counter);
                  this.buttons.push(even_buttons_counter);
                  even_buttons_counter++;
                }
              }
            } else {
              console.log("bijor");
              var one_minus_from_odd_number =
                button_controls.show_button_s1 - 2 - 1;
              var after_minusing_odd = one_minus_from_odd_number / 2;
              console.log(after_minusing_odd);
              var add_odd = e_1 + after_minusing_odd;
              var minus_odd = e_1 - after_minusing_odd;
              var difference_from_last = Math.abs(
                this.button_conditions.lst_button_value - add_odd
              );
              if (add_odd < this.button_conditions.lst_button_value) {
                console.log(this.button_conditions.lst_button_value);
                this.button_conditions.lst = true;
              } else {
                this.button_conditions.lst = false;
                minus_odd = e_1 - after_minusing_odd - 1 - difference_from_last;
                add_odd = this.button_conditions.lst_button_value;
              }
              console.log(`${minus_odd}, ${add_odd}`);
              var odd_buttons_counter = minus_odd;
              this.buttons = [];
              while (
                odd_buttons_counter >= minus_odd &&
                odd_buttons_counter <= add_odd
              ) {
                if (
                  odd_buttons_counter >= minus_odd &&
                  odd_buttons_counter <= add_odd
                ) {
                  console.log(odd_buttons_counter);
                  this.buttons.push(odd_buttons_counter);
                  odd_buttons_counter++;
                }
              }
            }
          }
        }
        //showing the page posts..
        var e_up = e_1 * button_controls.posts_per_page;
        var e_down = e_up - (button_controls.posts_per_page - 1);
        this.posts.forEach((post, i) => {
          var extra_i_work = i + 1;
          if (extra_i_work <= e_up && extra_i_work >= e_down) {
            this.showPosts.push(post);
          }
        });
      },
      show_posts_last() {
        scrollTopFunction();
        this.showPosts = [];
        var e_1 = this.button_conditions.lst_button_value;
        this.button_conditions.curent_button = e_1;
        //make buttons(last) again..
        if (
          this.button_conditions.lst_button_value >
          button_controls.show_button_s1
        ) {
          console.log(0);
          this.button_conditions.fst = true;
          this.button_conditions.lst = false;
          var odd_buttons_counterdown_one =
            this.button_conditions.lst_button_value -
            (button_controls.show_button_s1 - 2);
          this.buttons = [];
          console.log(odd_buttons_counterdown_one);
          while (
            odd_buttons_counterdown_one <=
            this.button_conditions.lst_button_value
          ) {
            console.log(odd_buttons_counterdown_one);
            this.buttons.push(odd_buttons_counterdown_one);
            odd_buttons_counterdown_one++;
          }
        }
        //showing the last page post..
        var e_up = e_1 * button_controls.posts_per_page;
        var e_down = e_up - (button_controls.posts_per_page - 1);
        this.posts.forEach((post, i) => {
          var extra_i_work = i + 1;
          if (extra_i_work <= e_up && extra_i_work >= e_down) {
            this.showPosts.push(post);
          }
        });
      },
    },
    mounted() {
      this.make_buttons();
      this.show_default_posts();
    },
  });
});
