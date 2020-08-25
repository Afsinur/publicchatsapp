window.addEventListener("load", () => {
  //---------------------------------------------------------
  //[for deleting all the users..]
  //--------------------------------------------------
  //---------------------------------------------------------
  //
  //------------------------------------------------
  //------------------------------------------------
  var thisBody = document.querySelector("body");
  var news_title = document.querySelector(".news_title");
  var publicchatsapp_idApp = document.querySelector("div#app");
  publicchatsapp_idApp.style.display = "block";
  new Vue({
    el: "#app",
    data: {
      pictures: [
        "flowers_bag_flower_89155_1366x768.jpg",
        "3d_fruit_glass_95074_1366x768.jpg",
        "unnamed (1).png",
        "unnamed (3).jpg",
        "unnamed (4).jpg",
        "unnamed (10).jpg",
        "unnamed (11).jpg",
        "unnamed (14).jpg",
        "unnamed (15).jpg",
        "unnamed (16).jpg",
        "unnamed (17).png",
        "computer_keyboard_mouse_laptop_mac_apple_66734_1366x768-min.jpg",
        "cube_surface_gloss_plastic_37663_1366x768-min.jpg",
        "cubes_silver_gold_form_93241_1366x768-min.jpg",
        "cubes_structure_3d_141489_1366x768-min.jpg",
        "cubes_structure_black_blue_120005_1366x768-min.jpg",
        "cubes_surface_space_61723_1366x768-min.jpg",
        "form_space_shape_43426_1366x768-min.jpg",
        "heart_red_blue_3d_118096_1366x768-min.jpg",
        "heart_shape_pink_118642_1366x768-min.jpg",
        "mountain_sky_lake_summer_92505_1366x768-min.jpg",
        "pier_bay_sunset_124807_1366x768-min.jpg",
        "square_cube_flight_light_color_15959_1366x768-min.jpg",
        "starry_sky_mountains_night_sea_stars_shore_118450_1366x768-min.jpg",
        "stones_gravel_surface_118937_1366x768-min.jpg",
        "coffee_cappuccino_foam_cinnamon_corn_108167_1366x768-min.jpg",
      ],
      myAndPublicColors: [
        "rgba(0, 250, 250, 0.7)",
        "rgba(0, 150, 250, 0.7)",
        "rgba(100, 250, 150, 0.7)",
        "rgba(255, 255, 255, 0.7)",
        "rgba(250, 0, 250, 0.7)",
        "rgba(250, 250, 0, 0.7)",
        "rgba(80, 80, 80, 0.7)",
        "rgba(250, 80, 80, 0.7)",
      ],
      activeImage: "flowers_bag_flower_89155_1366x768.jpg",
      activeSettings: false,
      updatemyColor: {
        backgroundColor: "rgba(0, 250, 250, 0.7)",
      },
      updatepublicsColor: {
        backgroundColor: "rgba(255, 255, 255, 0.7)",
      },
      activeSelectedColorMe: "rgba(0, 250, 250, 0.7)",
      activeSelectedColorPublic: "rgba(255, 255, 255, 0.7)",
      button_conditions: {
        loading: false,
      },
      present_user: false,
      myName: "",
      changeName: "Go",
      changePlaceholder: "Username..",
      messagePlaceholder: "Write your message..",
      replace_unique_name_typing: true,
      addMassageText: "",
      publicMessageFromWeb: [],
      timeDate: "",
      seeMe: true,
      usersTime: false,
      usersTimeShowAc: true,
      usersTimeShowDe: false,
    },
    methods: {
      log_in(e) {
        if (e != "" && e.length > 10) {
          var titleCounter = 0;
          this.button_conditions.loading = true;
          db.collection("users")
            .where("name", "==", e)
            .get()
            .then((data) => {
              if (data.docs.length == 0) {
                db.collection("users")
                  .add({
                    name: e,
                  })
                  .then(() => {
                    //same(onSnapshot: publicMessagesDatabase,
                    // except: this.present_user) starts..
                    //---------------------------------------------
                    this.timeDate = new Date();
                    db.collection("publicMessagesDatabase")
                      .add({
                        userName: e,
                        publicMessage: "Welcome to Puclic Chats",
                        newDate: this.timeDate,
                      })
                      .then(() => {
                        db.collection("publicMessagesDatabase")
                          .orderBy("newDate", "asc")
                          .onSnapshot((data) => {
                            data.docChanges().forEach((docChange) => {
                              let changeValue = docChange.doc.data();
                              if (docChange.type == "added") {
                                this.publicMessageFromWeb.unshift(changeValue);
                              }
                            });
                            this.replace_unique_name_typing = false;
                            this.button_conditions.loading = false;
                            this.present_user = true;
                            news_title.remove();
                            if (titleCounter > 0) {
                              document.title =
                                "Public Chats (" + titleCounter + ")";
                            }
                            titleCounter++;
                          });
                      });
                    //----------------------------------------------
                  });
              } else {
                //same(onSnapshot: publicMessagesDatabase,
                // except: this.present_user) starts..
                //---------------------------------------------
                db.collection("publicMessagesDatabase")
                  .orderBy("newDate", "asc")
                  .onSnapshot((data) => {
                    data.docChanges().forEach((docChange) => {
                      let changeValue = docChange.doc.data();
                      if (docChange.type == "added") {
                        this.publicMessageFromWeb.unshift(changeValue);
                      }
                    });
                    this.replace_unique_name_typing = false;
                    this.button_conditions.loading = false;
                    this.present_user = false;
                    news_title.remove();
                    if (titleCounter > 0) {
                      document.title = "Public Chats (" + titleCounter + ")";
                    }
                    titleCounter++;
                  });
                //----------------------------------------------
              }
            });
        } else {
          alert("Type minimum 11 carecters");
        }
      },
      addMessage(e) {
        if (this.addMassageText != "") {
          this.button_conditions.loading = true;
          this.timeDate = new Date();
          db.collection("publicMessagesDatabase")
            .add({
              userName: e,
              publicMessage: this.addMassageText,
              newDate: this.timeDate,
            })
            .then(() => {
              this.addMassageText = "";
              this.button_conditions.loading = false;
            });
        }
      },
      activeImagethis(e) {
        this.activeImage = e;
        thisBody.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('img/background/${this.activeImage}')`;
      },
      activeTheSettings() {
        this.activeSettings = true;
      },
      deactiveSettings() {
        this.activeSettings = false;
      },
      changemycolor(e) {
        this.activeSelectedColorMe = e;
        this.updatemyColor.backgroundColor = e;
      },
      changePubliccolor(e) {
        this.activeSelectedColorPublic = e;
        this.updatepublicsColor.backgroundColor = e;
      },
      usersTimeShow() {
        this.usersTimeShowAc = false;
        this.usersTimeShowDe = true;
        this.usersTime = true;
      },
      usersTimeNoShow() {
        this.usersTimeShowAc = true;
        this.usersTimeShowDe = false;
        this.usersTime = false;
      },
    },
  });
});
