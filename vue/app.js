window.addEventListener("load", () => {
  //------------------------------------------------
  //------------------------------------------------
  //tests..
  //
  //------------------------------------------------
  //------------------------------------------------
  var allTag = document.getElementsByTagName("*");
  var allTag_button = document.querySelectorAll("button");
  var thisBody = document.querySelector("body");
  var news_title = document.querySelector(".news_title");
  var publicchatsapp_idApp = document.querySelector("div#app");
  var div_loading_div = document.querySelector("div.loading_div");
  var snapCounter2 = 0;
  var snapCounterPushes = [];
  var snapCounterPushesNm = [];
  var colorArr = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  var blinkingTimes = 250;
  var acupdATER = 10000;
  var outerMyName = 0;
  var revAr1 = [];
  var _x = 0;
  var _x1 = 0;
  //
  var st12, st121, innrS, innrS1, aftSi, namee1;
  var cnt_c1 = 0;
  var x_ = 0;
  innrS1 = () => {
    db.collection(namee1)
      .get()
      .then((data) => {
        data.docs.forEach((doc) => {
          var thiIdmk = doc.id;
          var mkar1 = doc.data().seen;
          if (mkar1.includes(outerMyName) == false) {
            mkar1.push(outerMyName);
            db.collection(namee1).doc(thiIdmk).update({
              seen: mkar1,
            });
          }
        });
      });
  };
  innrS = () => {
    if (aftSi == 0) {
      while (cnt_c1 < 1) {
        st121 = setInterval(innrS1, 1000);
        cnt_c1++;
      }
    } else if (aftSi == true) {
      clearInterval(st121);
      aftSi = false;
      cnt_c1 = 0;
    } else if (aftSi == false) {
      aftSi = 0;
    } else if (aftSi == 10) {
      cnt_c1 = 0;
      clearInterval(st121);
    }
  };
  //
  //
  //show app div..
  publicchatsapp_idApp.style.display = "block";
  div_loading_div.remove();
  //
  //
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
        "computer_keyboard_mouse_laptop_mac_apple_66734_1366x768.jpg",
        "cube_surface_gloss_plastic_37663_1366x768.jpg",
        "cubes_silver_gold_form_93241_1366x768.jpg",
        "cubes_structure_3d_141489_1366x768.jpg",
        "cubes_structure_black_blue_120005_1366x768.jpg",
        "cubes_surface_space_61723_1366x768.jpg",
        "form_space_shape_43426_1366x768.jpg",
        "heart_red_blue_3d_118096_1366x768.jpg",
        "heart_shape_pink_118642_1366x768.jpg",
        "mountain_sky_lake_summer_92505_1366x768.jpg",
        "pier_bay_sunset_124807_1366x768.jpg",
        "square_cube_flight_light_color_15959_1366x768.jpg",
        "starry_sky_mountains_night_sea_stars_shore_118450_1366x768.jpg",
        "stones_gravel_surface_118937_1366x768.jpg",
        "coffee_cappuccino_foam_cinnamon_corn_108167_1366x768.jpg",
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
        "rgba(245, 45, 5, 0.7)",
        "rgba(212, 1, 254, 0.7)",
        "rgba(219, 215, 238, 0.7)",
        "rgba(2, 0, 20, 0.7)",
        "rgba(0, 174, 255, 0.7)",
      ],
      activeUanperAr: [],
      opcityAgreeWith: 0,
      usersopAgr: true,
      usersTimeShowAcseen: false,
      activeImage: "flowers_bag_flower_89155_1366x768.jpg",
      activeSettings: false, //default false
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
      delCaller: false,
      delCaller1: false,
      delCaller2: false,
      delCaller3: false,
      myName: "",
      divOpacity: "7",
      divOpacity_1: "0",
      changeName: "Go",
      changePlaceholder: "Username..",
      messagePlaceholder: "Write your message..",
      replace_unique_name_typing: true, //default true
      addMassageText: "",
      sendGrMgvM: "",
      nameGroupMine: "",
      tmSndGpmg: "Send",
      tmSndGpmg_11: "Send",
      publicMessageFromWeb: [],
      publicMessageFromGroupWeb: [],
      timeDate: "",
      seeMe: true,
      usersTime: false,
      usersTimeShowAc: true,
      usersTimeShowDe: false,
      divOpacity_styles: {
        state1: {
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        },
      },
      divOpacity_styles_c1: {
        state_c1: {
          color: "",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        },
        state_c10: {
          color: "",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        },
        state_c2: {
          color: "",
          backgroundColor: "#57f",
        },
        state_c3: {
          color: "#fff",
          backgroundColor: "#ad0000",
        },
      },
      moreSettingsAllControls: {
        almostActiveGroup: [],
        groupNewDate: "",
        activeSite: true,
        activeGroup: false,
        deactiveSite: false,
        showMyGroups: true,
        pushMyGroups: true,
        toggleMembersInActiveGroupFalse: false,
        showG_pControls_true: false,
        Ac_co: false,
        Ac_mm: false,
        grPmembersPrsButton: false,
        searchForAdding_Members: "",
        ex_Ac: false,
        searchingMem: "",
        wantToaddMem: "",
        addTrBt: false,
        picked: "",
        changeRadio: false,
        partCo: false,
        Show_settings: false, //default false
        mainLocalGroups_ActiveOne: "",
        mainLocalGroups: [], //can not contain same group name..
      },
    },
    methods: {
      log_in(e) {
        if (e != "" && e.length > 10) {
          this.button_conditions.loading = true;
          db.collection("users")
            .where("name", "==", e)
            .get()
            .then((data) => {
              var adLn1 = data.docs.length;
              db.collection("publicMessagesDatabase")
                .orderBy("u_id", "desc")
                .limit(1)
                .get()
                .then((data) => {
                  var id_Incr = 0;
                  const pr11101 = new Promise((resolve) => {
                    if (data.docs.length == 0) {
                      id_Incr = 0;
                      resolve(id_Incr);
                    } else {
                      data.docs.forEach((doc, index) => {
                        if (data.docs.length == index + 1) {
                          id_Incr = doc.data().u_id;
                          resolve(id_Incr);
                        }
                      });
                    }
                  });
                  pr11101.then(() => {
                    if (adLn1 == 0) {
                      // check the slice members all..
                      const promise_5 = new Promise((resolve) => {
                        var tr_or_fls = 0;
                        db.collection("users")
                          .get()
                          .then((data) => {
                            data.docs.forEach((doc, index) => {
                              if (
                                doc.data().name.slice(0, 5) == e.slice(0, 5)
                              ) {
                                tr_or_fls = 1;
                                resolve(tr_or_fls);
                              }
                              if (data.docs.length == index + 1) {
                                if (tr_or_fls != 1) {
                                  resolve(tr_or_fls);
                                }
                              }
                            });
                          });
                      });
                      promise_5.then((data) => {
                        if (data == 0) {
                          this.divOpacity_styles_c1.state_c1 = this.divOpacity_styles_c1.state_c10;
                          db.collection("users")
                            .where("name", "==", this.myName)
                            .get()
                            .then((data) => {
                              if (data.docs.length != 0) {
                                data.docs.forEach((doc) => {
                                  db.collection("users").doc(doc.id).update({
                                    active: 0,
                                  });
                                });
                              }
                            });
                          //-----------------------
                          db.collection("users")
                            .add({
                              name: e,
                              active: 0,
                            })
                            .then(() => {
                              outerMyName = this.myName;
                              //same(onSnapshot: publicMessagesDatabase,
                              // except: this.present_user) starts..
                              //---------------------------------------------
                              this.timeDate = new Date();
                              db.collection("publicMessagesDatabase")
                                .add({
                                  u_id: id_Incr + 1,
                                  userName: e,
                                  publicMessage: "Welcome to Puclic Chats",
                                  newDate: this.timeDate,
                                })
                                .then(() => {
                                  db.collection("publicMessagesDatabase")
                                    .orderBy("newDate", "desc")
                                    .limit(10)
                                    .get()
                                    .then((data) => {
                                      data.docs.forEach((doc, index) => {
                                        let changeValue = doc.data();
                                        this.divOpacity_styles_c1.state_c1 = this.divOpacity_styles_c1.state_c2;
                                        const prom1125 = new Promise(
                                          (resolve) => {
                                            revAr1.push(changeValue);
                                            if (
                                              data.docChanges().length ==
                                              index + 1
                                            ) {
                                              if (x_ == 0) {
                                                while (x_ < 1) {
                                                  this.publicMessageFromWeb = revAr1.reverse();
                                                  x_++;
                                                }
                                              } else {
                                                this.publicMessageFromWeb = revAr1;
                                              }
                                            }
                                            resolve(0);
                                          }
                                        );
                                        prom1125.then((rdata) => {
                                          if (rdata == 0) {
                                            setTimeout(() => {
                                              this.divOpacity_styles_c1.state_c1 = this.divOpacity_styles_c1.state_c10;
                                            }, blinkingTimes);
                                            var chatScVT1_varId_1an = document.getElementById(
                                              "chatScVT15"
                                            );
                                            chatScVT1_varId_1an.scrollIntoView({
                                              behavior: "smooth",
                                              block: "start",
                                            });
                                          }
                                        });
                                      });
                                      this.replace_unique_name_typing = false;
                                      this.button_conditions.loading = false;
                                      this.present_user = true;
                                      news_title.remove();
                                    });
                                  //-------------------------------
                                  db.collection("publicMessagesDatabase")
                                    .orderBy("newDate", "desc")
                                    .limit(1)
                                    .onSnapshot((data) => {
                                      data
                                        .docChanges()
                                        .forEach((docchange, index) => {
                                          if (docchange.type == "added") {
                                            let changeValue = docchange.doc.data();
                                            this.divOpacity_styles_c1.state_c1 = this.divOpacity_styles_c1.state_c2;
                                            const prom1125 = new Promise(
                                              (resolve) => {
                                                if (x_ != 0) {
                                                  revAr1.push(changeValue);
                                                  console.log(x_);
                                                }
                                                if (
                                                  data.docChanges().length ==
                                                  index + 1
                                                ) {
                                                  this.publicMessageFromWeb = revAr1;
                                                }
                                                resolve(0);
                                              }
                                            );
                                            prom1125.then((rdata) => {
                                              if (rdata == 0) {
                                                setTimeout(() => {
                                                  this.divOpacity_styles_c1.state_c1 = this.divOpacity_styles_c1.state_c10;
                                                }, blinkingTimes);
                                                var chatScVT1_varId_1an = document.getElementById(
                                                  "chatScVT15"
                                                );
                                                chatScVT1_varId_1an.scrollIntoView(
                                                  {
                                                    behavior: "smooth",
                                                    block: "start",
                                                  }
                                                );
                                              }
                                            });
                                          }
                                        });
                                    });
                                });
                              //----------------------------------------------
                            })
                            .then(() => {
                              db.collection("users")
                                .where("name", "==", this.myName)
                                .onSnapshot((data) => {
                                  data.docChanges().forEach((change) => {
                                    if (change.type == "modified") {
                                      db.collection("users")
                                        .where("name", "==", this.myName)
                                        .get()
                                        .then((data) => {
                                          if (data.docs.length != 0) {
                                            data.docs.forEach((doc) => {
                                              db.collection("users")
                                                .doc(doc.id)
                                                .update({
                                                  active: 0,
                                                });
                                            });
                                          }
                                        });
                                    }
                                  });
                                });
                              //----------------------------
                              var acUF = () => {
                                db.collection("users")
                                  .where("name", "==", this.myName)
                                  .get()
                                  .then((data) => {
                                    if (data.docs.length != 0) {
                                      data.docs.forEach((doc) => {
                                        db.collection("users")
                                          .doc(doc.id)
                                          .update({
                                            active: 1,
                                          });
                                      });
                                    }
                                  });
                                //--------------------------
                              };
                              setInterval(acUF, acupdATER);
                            });
                          //------------------------
                        } else {
                          this.divOpacity_styles_c1.state_c1 = this.divOpacity_styles_c1.state_c3;
                          alert("You can not take this name!");
                          this.button_conditions.loading = false;
                        }
                      });
                    } else {
                      outerMyName = this.myName;
                      this.divOpacity_styles_c1.state_c1 = this.divOpacity_styles_c1.state_c10;
                      //same(onSnapshot: publicMessagesDatabase,
                      // except: this.present_user) starts..
                      //---------------------------------------------
                      db.collection("users")
                        .where("name", "==", this.myName)
                        .get()
                        .then((data) => {
                          if (data.docs.length != 0) {
                            data.docs.forEach((doc) => {
                              db.collection("users").doc(doc.id).update({
                                active: 0,
                              });
                            });
                          }
                        });
                      //-------------------------------
                      db.collection("publicMessagesDatabase")
                        .orderBy("newDate", "desc")
                        .limit(10)
                        .get()
                        .then((data) => {
                          data.docs.forEach((doc, index) => {
                            let changeValue = doc.data();
                            this.divOpacity_styles_c1.state_c1 = this.divOpacity_styles_c1.state_c2;
                            const prom1125 = new Promise((resolve) => {
                              revAr1.push(changeValue);
                              if (data.docChanges().length == index + 1) {
                                if (x_ == 0) {
                                  while (x_ < 1) {
                                    this.publicMessageFromWeb = revAr1.reverse();
                                    x_++;
                                  }
                                } else {
                                  this.publicMessageFromWeb = revAr1;
                                }
                              }
                              resolve(0);
                            });
                            prom1125.then((rdata) => {
                              if (rdata == 0) {
                                setTimeout(() => {
                                  this.divOpacity_styles_c1.state_c1 = this.divOpacity_styles_c1.state_c10;
                                }, blinkingTimes);
                                var chatScVT1_varId_1an = document.getElementById(
                                  "chatScVT15"
                                );
                                chatScVT1_varId_1an.scrollIntoView({
                                  behavior: "smooth",
                                  block: "start",
                                });
                              }
                            });
                          });
                          this.replace_unique_name_typing = false;
                          this.button_conditions.loading = false;
                          this.present_user = false;
                          news_title.remove();
                        });
                      //-------------------------------
                      db.collection("publicMessagesDatabase")
                        .orderBy("newDate", "desc")
                        .limit(1)
                        .onSnapshot((data) => {
                          data.docChanges().forEach((docchange, index) => {
                            if (docchange.type == "added") {
                              let changeValue = docchange.doc.data();
                              this.divOpacity_styles_c1.state_c1 = this.divOpacity_styles_c1.state_c2;
                              const prom1125 = new Promise((resolve) => {
                                if (x_ != 0) {
                                  revAr1.push(changeValue);
                                }
                                if (data.docChanges().length == index + 1) {
                                  this.publicMessageFromWeb = revAr1;
                                }
                                resolve(0);
                              });
                              prom1125.then((rdata) => {
                                if (rdata == 0) {
                                  setTimeout(() => {
                                    this.divOpacity_styles_c1.state_c1 = this.divOpacity_styles_c1.state_c10;
                                  }, blinkingTimes);
                                  var chatScVT1_varId_1an = document.getElementById(
                                    "chatScVT15"
                                  );
                                  chatScVT1_varId_1an.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                  });
                                }
                              });
                            }
                          });
                        });
                      //--------------------------------
                      db.collection("users")
                        .where("name", "==", this.myName)
                        .onSnapshot((data) => {
                          data.docChanges().forEach((change) => {
                            if (change.type == "modified") {
                              db.collection("users")
                                .where("name", "==", this.myName)
                                .get()
                                .then((data) => {
                                  if (data.docs.length != 0) {
                                    data.docs.forEach((doc) => {
                                      db.collection("users")
                                        .doc(doc.id)
                                        .update({
                                          active: 0,
                                        });
                                    });
                                  }
                                });
                            }
                          });
                        });
                      //--------------------------------
                      var acUF = () => {
                        db.collection("users")
                          .where("name", "==", this.myName)
                          .get()
                          .then((data) => {
                            if (data.docs.length != 0) {
                              data.docs.forEach((doc) => {
                                db.collection("users").doc(doc.id).update({
                                  active: 1,
                                });
                              });
                            }
                          });
                      };
                      setInterval(acUF, acupdATER);
                    }
                  });
                });
            });
        } else {
          this.divOpacity_styles_c1.state_c1 = this.divOpacity_styles_c1.state_c3;
          alert("Type minimum 11 carecters");
        }
      },
      addMessage(e) {
        if (this.addMassageText != "") {
          this.tmSndGpmg_11 = "Send";
          this.divOpacity_styles_c1.state_c1 = this.divOpacity_styles_c1.state_c2;
          this.timeDate = new Date();
          db.collection("publicMessagesDatabase")
            .orderBy("u_id", "desc")
            .limit(1)
            .get()
            .then((data) => {
              var id_Incr = 0;
              const pr11101 = new Promise((resolve) => {
                if (data.docs.length == 0) {
                  id_Incr = 0;
                  resolve(id_Incr);
                } else {
                  data.docs.forEach((doc, index) => {
                    if (data.docs.length == index + 1) {
                      id_Incr = doc.data().u_id;
                      resolve(id_Incr);
                    }
                  });
                }
              });
              pr11101.then(() => {
                db.collection("publicMessagesDatabase")
                  .add({
                    u_id: id_Incr + 1,
                    userName: e,
                    publicMessage: this.addMassageText,
                    newDate: this.timeDate,
                  })
                  .then(() => {
                    this.addMassageText = "";
                    this.divOpacity_styles_c1.state_c1 = this.divOpacity_styles_c1.state_c10;
                    this.tmSndGpmg_11 = "Send";
                  });
              });
            });
        }
      },
      activeImagethis(e) {
        this.activeImage = e;
        thisBody.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('img/background/${this.activeImage}')`;
      },
      activeTheSettings() {
        this.moreSettingsAllControls.picked = "";
        this.activeSettings = true;
        if (this.moreSettingsAllControls.showMyGroups == true) {
          aftSi = true;
        }
      },
      deactiveSettings() {
        this.moreSettingsAllControls.picked = "";
        this.activeSettings = false;
        aftSi = 10;
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
      activeSitenav() {
        this.moreSettingsAllControls.activeSite = true;
        this.moreSettingsAllControls.activeGroup = false;
        this.moreSettingsAllControls.deactiveSite = false;
        aftSi = 10;
      },
      activeGroupnav() {
        this.moreSettingsAllControls.activeGroup = true;
        this.moreSettingsAllControls.activeSite = false;
        this.moreSettingsAllControls.deactiveSite = true;
        if (this.moreSettingsAllControls.pushMyGroups == true) {
          db.collection("publicGroups")
            .orderBy("groupNewDate", "asc")
            .onSnapshot((data) => {
              data.docChanges().forEach((docC) => {
                if (docC.type == "added") {
                  if (
                    docC.doc.data().leader == this.myName ||
                    docC.doc.data().coLeader == this.myName
                  ) {
                    if (docC.doc.data().leader == this.myName) {
                      this.moreSettingsAllControls.mainLocalGroups.push(
                        docC.doc.data().groupName
                      );
                    } else if (docC.doc.data().coLeader == this.myName) {
                      this.moreSettingsAllControls.mainLocalGroups.push(
                        docC.doc.data().groupName
                      );
                    }
                  } else {
                    var findIn_memBERS = docC.doc
                      .data()
                      .members.includes(this.myName);
                    if (findIn_memBERS == true) {
                      this.moreSettingsAllControls.mainLocalGroups.push(
                        docC.doc.data().groupName
                      );
                    }
                  }
                } else if (docC.type == "modified") {
                  if (
                    docC.doc.data().leader == this.myName ||
                    docC.doc.data().coLeader == this.myName
                  ) {
                    if (docC.doc.data().leader == this.myName) {
                      var search_findArrayString_an_L = this.moreSettingsAllControls.mainLocalGroups.includes(
                        docC.doc.data().groupName
                      );
                      if (search_findArrayString_an_L == false) {
                        this.moreSettingsAllControls.mainLocalGroups.push(
                          docC.doc.data().groupName
                        );
                      }
                    } else if (docC.doc.data().coLeader == this.myName) {
                      var search_findArrayString_an = this.moreSettingsAllControls.mainLocalGroups.includes(
                        docC.doc.data().groupName
                      );
                      if (search_findArrayString_an == false) {
                        this.moreSettingsAllControls.mainLocalGroups.push(
                          docC.doc.data().groupName
                        );
                      }
                    }
                  } else {
                    var search_findArrayString = docC.doc
                      .data()
                      .members.includes(this.myName);
                    if (search_findArrayString == true) {
                      var found_me_search = this.moreSettingsAllControls.mainLocalGroups.includes(
                        docC.doc.data().groupName
                      );
                      if (found_me_search == false) {
                        this.moreSettingsAllControls.mainLocalGroups.push(
                          docC.doc.data().groupName
                        );
                      }
                    } else {
                      var found_me_search_an = this.moreSettingsAllControls.mainLocalGroups.includes(
                        docC.doc.data().groupName
                      );
                      if (found_me_search_an == true) {
                        //--------------------------------------------------
                        if (
                          this.moreSettingsAllControls
                            .mainLocalGroups_ActiveOne ==
                          docC.doc.data().groupName
                        ) {
                          this.moreSettingsAllControls.mainLocalGroups_ActiveOne =
                            "";
                        }
                        //---------------------------------------------------
                        document
                          .querySelectorAll(
                            "#all_LocalGroupsContainer > ul > li"
                          )
                          .forEach((li) => {
                            if (
                              li.children[0].innerHTML.trim() ==
                              docC.doc.data().groupName.trim()
                            ) {
                              li.remove();
                            }
                          });
                        const promise_4 = new Promise((resolve) => {
                          var remP_F_1 = [];
                          this.moreSettingsAllControls.mainLocalGroups.forEach(
                            (gp) => {
                              if (gp != docC.doc.data().groupName) {
                                remP_F_1.push(gp);
                              }
                            }
                          );
                          resolve(remP_F_1);
                        });
                        promise_4.then((data) => {
                          this.moreSettingsAllControls.mainLocalGroups = data;
                        });
                      }
                    }
                  }
                } else if (docC.type == "removed") {
                  if (
                    this.moreSettingsAllControls.mainLocalGroups_ActiveOne ==
                    docC.doc.data().groupName
                  ) {
                    this.moreSettingsAllControls.mainLocalGroups_ActiveOne = "";
                  }
                  document
                    .querySelectorAll("#all_LocalGroupsContainer > ul > li")
                    .forEach((li) => {
                      if (
                        li.children[0].innerHTML.trim() ==
                        docC.doc.data().groupName.trim()
                      ) {
                        li.remove();
                      }
                    });
                  const promise_3 = new Promise((resolve) => {
                    var remP_F = [];
                    this.moreSettingsAllControls.mainLocalGroups.forEach(
                      (gp) => {
                        if (gp != docC.doc.data().groupName) {
                          remP_F.push(gp);
                        }
                      }
                    );
                    resolve(remP_F);
                  });
                  promise_3.then((data) => {
                    this.moreSettingsAllControls.mainLocalGroups = data;
                  });
                }
              });
            });
        }
        this.moreSettingsAllControls.pushMyGroups = false;
        if (this.moreSettingsAllControls.showMyGroups == true) {
          aftSi = true;
        }
      },
      func_ShowMyGroups() {
        this.moreSettingsAllControls.showMyGroups = true;
        aftSi = true;
      },
      func_MakeGroups() {
        this.moreSettingsAllControls.showMyGroups = false;
        aftSi = 10;
      },
      mainLocalGroups_ActiveOne_press(e) {
        var scrollTopTopublics = document.getElementById(
          "me_chatsContainer" //containerOfGroupChatsInputs
        );
        scrollTopTopublics.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        snapCounter2 = 0;
        snapCounterPushes.push({ groupName: e });
        snapCounterPushes.forEach((data) => {
          if (data.groupName.includes(e) == true) {
            snapCounter2++;
          }
        });
        this.publicMessageFromGroupWeb = [];
        this.moreSettingsAllControls.picked = "";
        this.moreSettingsAllControls.mainLocalGroups_ActiveOne = e;
        var trimValueOftheActiveGroup = e.trim();
        db.collection("publicGroups")
          .where("groupName", "==", trimValueOftheActiveGroup)
          .onSnapshot((data) => {
            data.docChanges().forEach((docC) => {
              this.moreSettingsAllControls.almostActiveGroup = [];
              this.moreSettingsAllControls.almostActiveGroup.push(
                docC.doc.data()
              );
            });
          });
        //
        if (snapCounter2 == 1) {
          if (aftSi != 0) {
            aftSi = 0;
            namee1 = e;
            st12 = setInterval(innrS, 1000);
          } else {
            namee1 = e;
          }
          /*db.collection().get().then(()=>{});*/
          //
          db.collection(e)
            .orderBy("newDate")
            .onSnapshot((data) => {
              data.docChanges().forEach((change) => {
                var rched = change.doc.data();
                var upSen = change.doc.id;
                var newUpseAr = change.doc.data().seen;
                if (change.type == "added") {
                  //
                  const prom112 = new Promise((resolve) => {
                    this.publicMessageFromGroupWeb.push(change.doc.data());
                    this.divOpacity_styles_c1.state_c1 = this.divOpacity_styles_c1.state_c2;
                    resolve(0);
                  });
                  prom112.then((rdata) => {
                    if (rdata == 0) {
                      setTimeout(() => {
                        this.divOpacity_styles_c1.state_c1 = this.divOpacity_styles_c1.state_c10;
                      }, blinkingTimes);
                      var chatScVT1_varId_1an = document.getElementById(
                        "chatScVT1"
                      );
                      chatScVT1_varId_1an.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  });
                } else if (change.type == "modified") {
                  var cNid = change.doc.data().newDate.toDate();
                  this.publicMessageFromGroupWeb.forEach((lgDt1, index) => {
                    if (lgDt1.newDate.toDate().toString() == cNid.toString()) {
                      lgDt1.seen = change.doc.data().seen;
                    }
                  });
                } else if (change.type == "removed") {
                  var usernAmeClSs_id_1 = document.querySelectorAll(
                    "div#notSelectedGrp_mg1_nDiv"
                  );
                  usernAmeClSs_id_1.forEach((smNm_1) => {
                    var sTvOfdel_user_1 = smNm_1.innerHTML.toString();
                    if (
                      sTvOfdel_user_1.includes(rched.newDate.toDate()) == true
                    ) {
                      smNm_1.remove();
                    }
                  });
                }
              });
            });
          const prLvpro = new Promise((resolve) => {
            db.collection("publicGroups")
              .where("groupName", "==", e)
              .get()
              .then((data) => {
                data.docs.forEach((doc, index) => {
                  var totalGpnaR = doc
                    .data()
                    .members.concat(doc.data().coLeader)
                    .concat(doc.data().leader);
                  var snapCounterPushesNm_1 = [];
                  if (data.docs.length == index + 1) {
                    totalGpnaR.forEach((ts1, index) => {
                      if (snapCounterPushesNm.includes(ts1) == false) {
                        snapCounterPushesNm.push(ts1);
                        snapCounterPushesNm_1.push(ts1);
                      }
                      if (totalGpnaR.length == index + 1) {
                        resolve(snapCounterPushesNm_1);
                      }
                    });
                  }
                });
              });
          });
          prLvpro.then((vLV) => {
            if (vLV.length != 0) {
              vLV.forEach((lVlvSa, index) => {
                db.collection("users")
                  .where("name", "==", lVlvSa)
                  .onSnapshot((data) => {
                    data.docChanges().forEach((changes, index) => {
                      var namesAcT = changes.doc.data().name;
                      if (changes.type == "added") {
                        if (changes.doc.data().active == 1) {
                          this.activeUanperAr.push(namesAcT);
                        }
                      } else if (changes.type == "modified") {
                        var nw_ac1 = [];
                        if (changes.doc.data().active == 0) {
                          this.activeUanperAr.forEach((s, index) => {
                            if (s.includes(namesAcT) == false) {
                              nw_ac1.push(s);
                            }
                            if (this.activeUanperAr.length == index + 1) {
                              this.activeUanperAr = nw_ac1;
                            }
                          });
                        } else if (changes.doc.data().active == 1) {
                          this.activeUanperAr.push(namesAcT);
                        }
                      }
                    });
                  });
              });
            }
          });
        } else {
          aftSi = true;
          namee1 = e;
          db.collection(e)
            .orderBy("newDate")
            .get()
            .then((data) => {
              data.docs.forEach((doc) => {
                this.publicMessageFromGroupWeb.push(doc.data());
              });
            })
            .then(() => {
              var chatScVT1_varId = document.getElementById("chatScVT1");
              chatScVT1_varId.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            });
        }
      },
      togglrSettingsFor_Groups(e) {
        if (e == false) {
          this.moreSettingsAllControls.Show_settings = true;
        } else {
          this.moreSettingsAllControls.Show_settings = false;
        }
      },
      toggleMembersInActiveGroup(e) {
        if (e == false) {
          this.moreSettingsAllControls.toggleMembersInActiveGroupFalse = true;
        } else {
          this.moreSettingsAllControls.toggleMembersInActiveGroupFalse = false;
        }
      },
      showG_pControls(e) {
        this.moreSettingsAllControls.picked = "";
        if (e == false) {
          this.moreSettingsAllControls.showG_pControls_true = true;
        } else {
          this.moreSettingsAllControls.showG_pControls_true = false;
        }
      },
      Ac_coSelected(e) {
        if (e == false) {
          this.moreSettingsAllControls.Ac_co = true;
          this.moreSettingsAllControls.Ac_mm = false;
        } else {
          this.moreSettingsAllControls.Ac_co = false;
        }
      },
      Ac_mmSelected(e) {
        this.moreSettingsAllControls.picked = "";
        if (e == false) {
          this.moreSettingsAllControls.Ac_mm = true;
          this.moreSettingsAllControls.Ac_co = false;
        } else {
          this.moreSettingsAllControls.Ac_mm = false;
        }
      },
      thisMemberRemove(e, e1) {
        db.collection("publicGroups")
          .where("groupName", "==", e)
          .get()
          .then((data) => {
            var pushedMembersByLeaders = [];
            data.docs.forEach((doc) => {
              doc.data().members.forEach((member) => {
                if (member != e1) {
                  pushedMembersByLeaders.push(member);
                }
              });
            });
            //separeted..
            db.collection("publicGroups")
              .where("groupName", "==", e)
              .get()
              .then((data) => {
                data.docs.forEach((doc) => {
                  db.collection("publicGroups").doc(doc.id).update({
                    members: pushedMembersByLeaders,
                  });
                });
              });
          });
      },
      grPmembersPrs(e) {
        if (e == false) {
          this.moreSettingsAllControls.grPmembersPrsButton = true;
        } else {
          this.moreSettingsAllControls.grPmembersPrsButton = false;
        }
      },
      expand_addAC(e) {
        if (e == false) {
          this.moreSettingsAllControls.addTrBt = false;
          this.moreSettingsAllControls.ex_Ac = true;
        } else {
          this.moreSettingsAllControls.ex_Ac = false;
          this.moreSettingsAllControls.searchingMem = "";
          this.moreSettingsAllControls.searchForAdding_Members = "";
        }
      },
      find_himMemberOne(e1) {
        if (this.moreSettingsAllControls.searchForAdding_Members != "") {
          db.collection("users")
            .get()
            .then((data) => {
              var ifLoading = "Loading..";
              var ifLoadCounter = 1;
              var countertoGetAmem = 0;
              var last_testFrMh = 1;
              var justForDCurrently = "";
              data.docs.forEach((doc) => {
                var amn_1 = doc.data().name;
                if (
                  amn_1.slice(0, 5) ==
                  this.moreSettingsAllControls.searchForAdding_Members
                ) {
                  ifLoadCounter = 0;
                  ifLoading = "";
                  //
                  db.collection("publicGroups")
                    .where("groupName", "==", e1)
                    .get()
                    .then((data) => {
                      data.docs.forEach((doc) => {
                        if (doc.data().members.includes(amn_1) == true) {
                          last_testFrMh = "n";
                          if (last_testFrMh == "n") {
                            this.moreSettingsAllControls.addTrBt = false;
                            this.moreSettingsAllControls.searchingMem =
                              "already a member of this group!";
                          }
                        } else {
                          last_testFrMh = "m";
                          justForDCurrently = amn_1;
                          this.moreSettingsAllControls.wantToaddMem = amn_1;
                          if (last_testFrMh == "m") {
                            this.moreSettingsAllControls.addTrBt = false;
                            if (justForDCurrently == this.myName) {
                              this.moreSettingsAllControls.searchingMem =
                                "You are already leader for this group!";
                            } else {
                              this.moreSettingsAllControls.addTrBt = true;
                              this.moreSettingsAllControls.searchingMem = "";
                              this.moreSettingsAllControls.searchingMem =
                                justForDCurrently.slice(0, 5) + "..";
                            }
                          }
                        }
                      });
                    });
                } else {
                  if (countertoGetAmem <= data.docs.length) {
                    countertoGetAmem++;
                    if (countertoGetAmem == data.docs.length) {
                      ifLoading = "";
                      this.moreSettingsAllControls.addTrBt = false;
                      this.moreSettingsAllControls.searchingMem =
                        "No match found!";
                    } else {
                      if (ifLoadCounter > 0) {
                        ifLoadCounter++;
                        if (ifLoadCounter == data.docs.length) {
                          ifLoading = "";
                        } else {
                          ifLoading = "Loading..";
                          this.moreSettingsAllControls.searchingMem = ifLoading;
                        }
                      }
                    }
                  }
                }
              });
            })
            .then(() => {
              this.moreSettingsAllControls.searchForAdding_Members = "";
            });
        }
      },
      find_himMemberOne_1(e1, e2) {
        if (this.moreSettingsAllControls.searchForAdding_Members != "") {
          db.collection("users")
            .get()
            .then((data) => {
              var ifLoading = "Loading..";
              var ifLoadCounter = 1;
              var countertoGetAmem = 0;
              var last_testFrMh = 1;
              var justForDCurrently = "";
              data.docs.forEach((doc) => {
                var amn_1 = doc.data().name;
                if (
                  amn_1.slice(0, 5) ==
                  this.moreSettingsAllControls.searchForAdding_Members
                ) {
                  ifLoadCounter = 0;
                  ifLoading = "";
                  //
                  db.collection("publicGroups")
                    .where("groupName", "==", e1)
                    .get()
                    .then((data) => {
                      data.docs.forEach((doc) => {
                        if (doc.data().members.includes(amn_1) == true) {
                          last_testFrMh = "n";
                          if (last_testFrMh == "n") {
                            this.moreSettingsAllControls.addTrBt = false;
                            this.moreSettingsAllControls.searchingMem =
                              "already a member of this group!";
                          }
                        } else {
                          if (doc.data().leader.slice(0, 5) == e2) {
                            this.moreSettingsAllControls.addTrBt = false;
                            this.moreSettingsAllControls.searchingMem =
                              "already leader of this group!";
                          } else {
                            last_testFrMh = "m";
                            justForDCurrently = amn_1;
                            this.moreSettingsAllControls.wantToaddMem = amn_1;
                            if (last_testFrMh == "m") {
                              this.moreSettingsAllControls.addTrBt = false;
                              if (justForDCurrently == this.myName) {
                                this.moreSettingsAllControls.searchingMem =
                                  "You are already co-leader for this group!";
                              } else {
                                this.moreSettingsAllControls.addTrBt = true;
                                this.moreSettingsAllControls.searchingMem = "";
                                this.moreSettingsAllControls.searchingMem =
                                  justForDCurrently.slice(0, 5) + "..";
                              }
                            }
                          }
                        }
                      });
                    });
                } else {
                  if (countertoGetAmem <= data.docs.length) {
                    countertoGetAmem++;
                    if (countertoGetAmem == data.docs.length) {
                      ifLoading = "";
                      this.moreSettingsAllControls.addTrBt = false;
                      this.moreSettingsAllControls.searchingMem =
                        "No match found!";
                    } else {
                      if (ifLoadCounter > 0) {
                        ifLoadCounter++;
                        if (ifLoadCounter == data.docs.length) {
                          ifLoading = "";
                        } else {
                          ifLoading = "Loading..";
                          this.moreSettingsAllControls.searchingMem = ifLoading;
                        }
                      }
                    }
                  }
                }
              });
            })
            .then(() => {
              this.moreSettingsAllControls.searchForAdding_Members = "";
            });
        }
      },
      addMemberToThisGp(e, e1) {
        db.collection("publicGroups")
          .where("groupName", "==", e1)
          .get()
          .then((data) => {
            data.docs.forEach((doc) => {
              if (doc.data().members.includes(e) == false) {
                var concatedArrayMembers = doc.data().members.concat(e);
                db.collection("publicGroups")
                  .doc(doc.id)
                  .update({
                    members: concatedArrayMembers,
                  })
                  .then(() => {
                    this.moreSettingsAllControls.searchingMem = "";
                    this.moreSettingsAllControls.addTrBt = false;
                  });
              }
            });
          });
      },
      shoko_co(e) {
        this.moreSettingsAllControls.picked = "";
        if (e == false) {
          this.moreSettingsAllControls.changeRadio = true;
        } else {
          this.moreSettingsAllControls.changeRadio = false;
        }
      },
      makeCo(e, e1, e2) {
        if (e != "") {
          db.collection("publicGroups")
            .where("groupName", "==", e2)
            .get()
            .then((data) => {
              data.docs.forEach((doc) => {
                const p_romise1 = new Promise((resolve) => {
                  var normalOldArrayFromMem = [];
                  doc.data().members.forEach((member) => {
                    if (member != e) {
                      normalOldArrayFromMem.push(member);
                    }
                  });
                  resolve(normalOldArrayFromMem);
                });
                p_romise1.then((data) => {
                  if (e1 == "") {
                    db.collection("publicGroups")
                      .doc(doc.id)
                      .update({
                        coLeader: e,
                        members: data,
                      })
                      .then(() => {
                        this.moreSettingsAllControls.picked = "";
                      });
                  } else {
                    var concatedmEM = data.concat(e1);
                    db.collection("publicGroups")
                      .doc(doc.id)
                      .update({
                        coLeader: e,
                        members: concatedmEM,
                      })
                      .then(() => {
                        this.moreSettingsAllControls.picked = "";
                      });
                  }
                });
              });
            });
        }
      },
      mkCoLd(e, e1, e2) {
        db.collection("publicGroups")
          .where("groupName", "==", e2)
          .get()
          .then((data) => {
            data.docs.forEach((doc) => {
              db.collection("publicGroups")
                .doc(doc.id)
                .update({
                  leader: e,
                  coLeader: e1,
                })
                .then(() => {
                  this.moreSettingsAllControls.Ac_co = false;
                });
            });
          });
      },
      mkmmLd(e, e1, e2, e3) {
        if (e1 != "") {
          db.collection("publicGroups")
            .where("groupName", "==", e2)
            .get()
            .then((data) => {
              data.docs.forEach((doc) => {
                const p_romise1_af = new Promise((resolve) => {
                  var normalOldArrayFromMem_1 = [];
                  doc.data().members.forEach((member) => {
                    if (member != e1) {
                      normalOldArrayFromMem_1.push(member);
                    }
                  });
                  resolve(normalOldArrayFromMem_1);
                });
                p_romise1_af.then((data) => {
                  var concatedmEM_1 = data.concat(e3);
                  db.collection("publicGroups")
                    .doc(doc.id)
                    .update({
                      leader: e,
                      coLeader: e1,
                      members: concatedmEM_1,
                    })
                    .then(() => {
                      this.moreSettingsAllControls.picked = "";
                      this.moreSettingsAllControls.Ac_mm = false;
                    });
                });
              });
            });
        }
      },
      partCo_f(e) {
        if (e == false) {
          this.moreSettingsAllControls.partCo = true;
        } else {
          this.moreSettingsAllControls.partCo = false;
        }
      },
      sendGrMg(e1, e2, e3) {
        if (e3 != "") {
          this.divOpacity_styles_c1.state_c1 = this.divOpacity_styles_c1.state_c2;
          db.collection(e1)
            .orderBy("u_id", "desc")
            .limit(1)
            .get()
            .then((data) => {
              var id_Incr = 0;
              const pr11101 = new Promise((resolve) => {
                if (data.docs.length == 0) {
                  id_Incr = 0;
                  resolve(id_Incr);
                } else {
                  data.docs.forEach((doc, index) => {
                    if (data.docs.length == index + 1) {
                      id_Incr = doc.data().u_id;
                      resolve(id_Incr);
                    }
                  });
                }
              });
              pr11101.then((pdts21) => {
                db.collection(e1)
                  .add({
                    u_id: pdts21 + 1,
                    userName: e2,
                    publicMessage: e3,
                    newDate: new Date(),
                    seen: [this.myName],
                  })
                  .then(() => {
                    this.divOpacity_styles_c1.state_c1 = this.divOpacity_styles_c1.state_c10;
                    this.sendGrMgvM = "";
                  });
              });
            });
        }
      },
      goforComGrp(e, e1) {
        if (e != "") {
          db.collection("publicGroups")
            .where("groupName", "==", e)
            .get()
            .then((data) => {
              if (data.docs.length == 0) {
                db.collection("publicGroups")
                  .add({
                    groupName: e,
                    leader: e1,
                    coLeader: "",
                    members: [],
                    groupNewDate: new Date(),
                  })
                  .then(() => {
                    this.nameGroupMine = "";
                  });
              } else {
                alert("Can not take this group name!");
              }
            });
        }
      },
      chn_op(e) {
        if (this.opcityAgreeWith == 1) {
          var div_ofE = e / 10;
          //
          var comaCount = 0;
          var str = this.updatemyColor.backgroundColor;
          for (let i = 0; i < str.length; i++) {
            var element = str[i];
            if (element == ",") {
              comaCount++;
              if (comaCount == 3) {
                var slcOfComa = str.slice(0, i + 1);
                var concatedValuedOutp = slcOfComa.concat(" " + div_ofE + ")");
                this.updatemyColor.backgroundColor = concatedValuedOutp;
                this.activeSelectedColorMe = concatedValuedOutp;
              }
            }
          }
          //
          var comaCount_1 = 0;
          var str_1 = this.updatepublicsColor.backgroundColor;
          for (let i = 0; i < str_1.length; i++) {
            var element_1 = str_1[i];
            if (element_1 == ",") {
              comaCount_1++;
              if (comaCount_1 == 3) {
                var slcOfComa_1 = str_1.slice(0, i + 1);
                var concatedValuedOutp_1 = slcOfComa_1.concat(
                  " " + div_ofE + ")"
                );
                this.updatepublicsColor.backgroundColor = concatedValuedOutp_1;
                this.activeSelectedColorPublic = concatedValuedOutp_1;
              }
            }
          }
          //
          var myAndPublicColors_15 = this.myAndPublicColors;
          this.myAndPublicColors = [];
          var div_ofE_15 = e / 10;
          myAndPublicColors_15.forEach((element) => {
            var comaCount_15 = 0;
            for (let i = 0; i < element.length; i++) {
              var element_1 = element[i];
              if (element_1 == ",") {
                comaCount_15++;
                if (comaCount_15 == 3) {
                  var slcOfComa_15 = element.slice(0, i + 1);
                  var concatedValuedOutp_15 = slcOfComa_15.concat(
                    " " + div_ofE_15 + ")"
                  );
                  this.myAndPublicColors.push(concatedValuedOutp_15);
                }
              }
            }
          });
        }
        //
        var clrforBOcy = `rgba(255, 255, 255, ${e / 10})`;
        this.divOpacity_styles_c1.state_c1 = this.divOpacity_styles_c1.state_c10;
        for (let i = 0; i < allTag_button.length; i++) {
          allTag_button[i].style.backgroundColor = clrforBOcy;
          this.divOpacity_styles_c1.state_c10.backgroundColor = clrforBOcy;
        }
        this.divOpacity_styles.state1.backgroundColor = clrforBOcy;
      },
      chn_op_1(e) {
        var clrforBOcy_c1 = "#" + colorArr[e] + colorArr[e] + colorArr[e];
        this.divOpacity_styles_c1.state_c1 = this.divOpacity_styles_c1.state_c10;
        this.divOpacity_styles_c1.state_c10.color = clrforBOcy_c1;
        for (var i = 0; i < allTag.length; i++) {
          allTag[i].style.color = clrforBOcy_c1;
        }
      },
      usersopAgr_f1(e) {
        if (e == false) {
          this.usersopAgr = true;
          this.opcityAgreeWith = 0;
        } else {
          this.usersopAgr = false;
          this.opcityAgreeWith = 1;
        }
      },
      delTMyacall(e) {
        if (e == false) {
          this.delCaller = true;
        }
      },
      delCaller1_f(e) {
        if (e == false) {
          this.delCaller1 = true;
        }
      },
      delCaller2_f(e) {
        if (e == false) {
          this.delCaller2 = true;
        }
      },
      delCaller3_f(e) {
        if (e == false) {
          this.delCaller3 = true;
        }
      },
      delTMyacallit(e) {
        this.button_conditions.loading = true;
        var analiz_1 = 0;
        const prDlC_after = new Promise((resolve) => {
          var wanting_delete_User = this.myName;
          //leader
          db.collection("publicGroups")
            .where("leader", "==", wanting_delete_User)
            .get()
            .then((data) => {
              const prdl_1 = new Promise((resolve) => {
                data.docs.forEach((doc, index) => {
                  var newCoLdL = doc.data().coLeader;
                  var newCoLdLGrp = doc.data().groupName;
                  var upIDnw = doc.id;
                  db.collection(newCoLdLGrp)
                    .where("userName", "==", wanting_delete_User)
                    .get()
                    .then((data) => {
                      data.docs.forEach((doc, index) => {
                        db.collection(newCoLdLGrp).doc(doc.id).delete();
                      });
                    }) //1st process..
                    .then(() => {
                      if (newCoLdL != "") {
                        db.collection("publicGroups").doc(upIDnw).update({
                          leader: newCoLdL,
                          coLeader: "",
                        }); //2nd process..
                      } else if (newCoLdL == "") {
                        db.collection("publicGroups").doc(upIDnw).delete();
                      }
                    });
                  if (data.docs.length == index + 1) {
                    analiz_1 = 1;
                    resolve(analiz_1);
                  }
                });
                if (data.docs.length == 0) {
                  resolve(analiz_1);
                }
              });
              prdl_1.then((pd_1) => {
                if (data.docs.length == 0 || pd_1 == 1) {
                  db.collection("publicGroups")
                    .where("coLeader", "==", wanting_delete_User)
                    .get()
                    .then((data) => {
                      const prdl_2 = new Promise((resolve) => {
                        data.docs.forEach((doc, index) => {
                          var newCoLdLGrp_1 = doc.data().groupName;
                          db.collection(newCoLdLGrp_1)
                            .where("userName", "==", wanting_delete_User)
                            .get()
                            .then((data) => {
                              data.docs.forEach((doc) => {
                                db.collection(newCoLdLGrp_1)
                                  .doc(doc.id)
                                  .delete();
                              });
                            }) //3rd process..
                            .then(() => {
                              db.collection("publicGroups").doc(doc.id).update({
                                coLeader: "",
                              }); //4rd process..
                            });
                          if (data.docs.length == index + 1) {
                            analiz_1 = 2;
                            resolve(analiz_1);
                          }
                        });
                        if (data.docs.length == 0) {
                          resolve(analiz_1);
                        }
                      });
                      prdl_2.then((pd_2) => {
                        if (data.docs.length == 0 || pd_2 == 2) {
                          db.collection("publicGroups")
                            .get()
                            .then((data) => {
                              const prdl_3 = new Promise((resolve) => {
                                data.docs.forEach((doc, index) => {
                                  var membersUpId = doc.id;
                                  if (
                                    doc
                                      .data()
                                      .members.includes(wanting_delete_User) ==
                                    true
                                  ) {
                                    var memgrP1 = doc.data().groupName;
                                    var memgrP1_ln = doc.data().members.length;
                                    db.collection(memgrP1)
                                      .where(
                                        "userName",
                                        "==",
                                        wanting_delete_User
                                      )
                                      .get()
                                      .then((data) => {
                                        data.docs.forEach((doc) => {
                                          db.collection(memgrP1)
                                            .doc(doc.id)
                                            .delete();
                                        });
                                      }) //5th process..
                                      .then(() => {
                                        var newListedMembersWithoutMe = [];
                                        const prms25 = new Promise(
                                          (resolve) => {
                                            doc
                                              .data()
                                              .members.forEach((mbr, index) => {
                                                if (
                                                  mbr != wanting_delete_User
                                                ) {
                                                  newListedMembersWithoutMe.push(
                                                    mbr
                                                  );
                                                }
                                                if (memgrP1_ln == index + 1) {
                                                  resolve(
                                                    newListedMembersWithoutMe
                                                  );
                                                }
                                              });
                                          }
                                        );
                                        prms25.then((pmdata) => {
                                          db.collection("publicGroups")
                                            .doc(membersUpId)
                                            .update({
                                              members: pmdata,
                                            }); //6th process..
                                        });
                                      });
                                  }
                                  if (data.docs.length == index + 1) {
                                    analiz_1 = 3;
                                    resolve(analiz_1);
                                  }
                                });
                                if (data.docs.length == 0) {
                                  resolve(analiz_1);
                                }
                              });
                              prdl_3.then((pd_3) => {
                                if (data.docs.length == 0 || pd_3 == 3) {
                                  db.collection("publicMessagesDatabase")
                                    .where(
                                      "userName",
                                      "==",
                                      wanting_delete_User
                                    )
                                    .get()
                                    .then((data) => {
                                      const prdl_4 = new Promise((resolve) => {
                                        data.docs.forEach((doc, index) => {
                                          db.collection(
                                            "publicMessagesDatabase"
                                          )
                                            .doc(doc.id)
                                            .delete();
                                          if (data.docs.length == index + 1) {
                                            analiz_1 = 4;
                                            resolve(analiz_1);
                                          }
                                        });
                                        if (data.docs.length == 0) {
                                          resolve(analiz_1);
                                        }
                                      });
                                      prdl_4.then((pd_4) => {
                                        if (
                                          data.docs.length == 0 ||
                                          pd_4 == 4
                                        ) {
                                          db.collection("users")
                                            .where(
                                              "name",
                                              "==",
                                              wanting_delete_User
                                            )
                                            .get()
                                            .then((data) => {
                                              const prdl_5 = new Promise(
                                                (resolve) => {
                                                  data.docs.forEach(
                                                    (doc, index) => {
                                                      db.collection("users")
                                                        .doc(doc.id)
                                                        .delete();
                                                      if (
                                                        data.docs.length ==
                                                        index + 1
                                                      ) {
                                                        analiz_1 = 5;
                                                        resolve(analiz_1);
                                                      }
                                                    }
                                                  );
                                                  if (data.docs.length == 0) {
                                                    resolve(analiz_1);
                                                  }
                                                }
                                              );
                                              prdl_5.then((pd_5) => {
                                                if (
                                                  data.docs.length == 0 ||
                                                  pd_5 == 5
                                                ) {
                                                  resolve(0);
                                                }
                                              });
                                            });
                                        }
                                      });
                                    });
                                }
                              });
                            });
                        }
                      });
                    });
                }
              });
            });
        });
        prDlC_after.then((dp) => {
          if (dp == 0) {
            location.reload();
          }
        });
      },
      delTMyacallit1(e, e1) {
        this.delCaller1 = false;
        db.collection("publicGroups")
          .where("groupName", "==", e1)
          .where("coLeader", "==", e)
          .get()
          .then((data) => {
            data.docs.forEach((doc) => {
              db.collection("publicGroups").doc(doc.id).update({
                coLeader: "",
              });
            });
          });
      },
      delTMyacallit2(e, e1) {
        this.delCaller2 = false;
        db.collection("publicGroups")
          .where("groupName", "==", e1)
          .get()
          .then((data) => {
            var newupArforLeave = [];
            data.docs.forEach((doc) => {
              if (doc.data().members.includes(e) == true) {
                doc.data().members.forEach((mbLev) => {
                  if (mbLev != e) {
                    newupArforLeave.push(mbLev);
                  }
                });
              }
              db.collection("publicGroups").doc(doc.id).update({
                members: newupArforLeave,
              });
            });
          });
      },
      delTMyacallit3(e) {
        this.delCaller3 = false;
        db.collection(e)
          .get()
          .then((data) => {
            data.docs.forEach((doc) => {
              db.collection(e).doc(doc.id).delete();
            });
          })
          .then(() => {
            db.collection("publicGroups")
              .where("groupName", "==", e)
              .get()
              .then((data) => {
                data.docs.forEach((doc) => {
                  db.collection("publicGroups").doc(doc.id).delete();
                });
              });
          });
      },
      my_Function12() {
        var iDmessages_div = document.querySelector("#iDmessages_div");
        console.log();
        if (iDmessages_div.scrollTop == 0) {
          var jusyAr1 = [];
          _x += 10;
          if (this.publicMessageFromWeb.length - _x >= 0) {
            this.button_conditions.loading = true;
            var id_Incr1 = this.publicMessageFromWeb[_x1].u_id;
            db.collection("publicMessagesDatabase")
              .where("u_id", "<", id_Incr1 - _x1)
              .where("u_id", ">=", id_Incr1 - _x)
              .get()
              .then((data) => {
                data.docs.forEach((doc, index) => {
                  jusyAr1.unshift(doc.data());
                  if (data.docs.length == index + 1) {
                    jusyAr1.forEach((datajE, index) => {
                      this.publicMessageFromWeb.unshift(datajE);
                      if (jusyAr1.length == index + 1) {
                        this.button_conditions.loading = false;
                        iDmessages_div.scrollTop = 50;
                      }
                    });
                  }
                });
              });
          }
          _x1 += 10;
        }
      },
    },
  });
});
