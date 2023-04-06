let inMsg;

document.getElementById("output").innerText =
  "로이에게 물어보세요!";

document.addEventListener("click", (event) => {
  const target = event.target;
  if (target.id == "send") {
    inMsg = document.getElementById("user_msg").value;
    check();
    document.getElementById("user_msg").value = "";
  }
  if (target.id == "help") {
    if(document.getElementById('pop').style.display == "none") {
      document.getElementById('pop').style.display = "inline";
    }
    else {
      document.getElementById('pop').style.display = "none";
    }
  }
});

const check = () => {

  // 로이랑 놀기 ---------------------------------------------------------------------------------------------------------
  if (inMsg.includes("안녕")) {
    document.getElementById("output").innerText = "안녕하세요 ^^";
    document.getElementById("bot_img").style.background =
        "url(./img/ROE_Hi.png) no-repeat";
  } 

  else if (inMsg.includes("이름")) {
    document.getElementById("output").innerText = "안녕하세요! 저는 로보링크의 챗 봇 \n \"로이\"라고 합니다.";
    document.getElementById("bot_img").style.background =
        "url(./img/ROE_NAME.png) no-repeat";
  } 

  else if (inMsg.includes("바보")||inMsg.includes("멍청이")) {
    document.getElementById("output").innerText = "더 열심히 노력하겠습니다. ㅠㅠ";
    document.getElementById("bot_img").style.background =
        "url(./img/ROE_nn.png) no-repeat";
  } 

  else if (inMsg.includes("미안")) {
    document.getElementById("output").innerText = "괜찮습니다! ^^";
    document.getElementById("bot_img").style.background =
        "url(./img/ROE_n.png) no-repeat";
  } 

  else if (inMsg.includes("로이")) {
    document.getElementById("output").innerText = "저를 부르셨나요?";
    document.getElementById("bot_img").style.background =
        "url(./img/ROE_n.png) no-repeat";
  } 

  else if ((inMsg.includes("사랑"))||inMsg.includes("고마워")||inMsg.includes("감사"))  {
    document.getElementById("output").innerText = "행복한 말은 저에게 힘이 됩니다! ♥♥♥";
    document.getElementById("bot_img").style.background =
        "url(./img/ROE_love.png) no-repeat";
  } 
  

// 코드론 미니 ---------------------------------------------------------------------------------------------------------

  else if (
    (inMsg.includes("코드론") && inMsg.includes("미니")) && inMsg.includes("이상") ) {
      document.getElementById("output").innerText = "코드론 미니가 이상하게 날아 갈 경우 \n트림을 추천 드립니다!\n 모터의 출력을 조절해주는 미세조정(트림)을 합니다.";
      //document.body.style.background = "rgb(255, 242, 204, 1)" 
      document.getElementById("bot_img").style.background =
      "url(./img/Mini_Trim.png) no-repeat";
    }

  else if (
      (inMsg.includes("코드론") && inMsg.includes("미니")) && inMsg.includes("흘러") ) {
        document.getElementById("output").innerText = "코드론 미니가 이상하게 날아 갈 경우 \n트림을 추천 드립니다!\n 모터의 출력을 조절해주는 미세조정(트림)을 합니다.";
        //document.body.style.background = "rgb(255, 242, 204, 1)" 
        document.getElementById("bot_img").style.background =
        "url(./img/Mini_Trim.png) no-repeat";
      }
  else if (
        (inMsg.includes("코드론") && inMsg.includes("미니")) && inMsg.includes("한쪽") ) {
          document.getElementById("output").innerText = "코드론 미니가 이상하게 날아 갈 경우 \n트림을 추천 드립니다!\n 모터의 출력을 조절해주는 미세조정(트림)을 합니다.";
          //document.body.style.background = "rgb(255, 242, 204, 1)" 
          document.getElementById("bot_img").style.background =
          "url(./img/Mini_Trim.png) no-repeat";
        }
  else if (
          (inMsg.includes("코드론") && inMsg.includes("미니")) && inMsg.includes("한 쪽") ) {
            document.getElementById("output").innerText = "코드론 미니가 이상하게 날아 갈 경우 \n트림을 추천 드립니다!\n 모터의 출력을 조절해주는 미세조정(트림)을 합니다.";
            //document.body.style.background = "rgb(255, 242, 204, 1)" 
            document.getElementById("bot_img").style.background =
            "url(./img/Mini_Trim.png) no-repeat";
          }


  else if (
    (inMsg.includes("코드론") && inMsg.includes("미니")) && inMsg.includes("선") ) {
      document.getElementById("output").innerText = "코드론 미니의 끊어진 선은 안테나 입니다.";
      document.getElementById("bot_img").style.background =
      "url(./img/Mini_line.png) no-repeat";
    }
 // 코드론 미니 소음  ---------------------------------------------------------------------------------------------------------
   else if (
    (inMsg.includes("코드론") && inMsg.includes("미니")) && inMsg.includes("소음") ) {
    document.getElementById("output").innerText = "코드론 미니의 소리나 소음은 \n 아래의 이미지를 참고해주세요!";
    //document.body.style.background = "rgb(255, 242, 204, 1)" 
    document.getElementById("bot_img").style.background =
    "url(./img/Mini_db.png) no-repeat";
  }

  else if (
    (inMsg.includes("코드론") && inMsg.includes("미니")) && inMsg.includes("소리") ) {
    document.getElementById("output").innerText = "코드론 미니의 소리나 소음은 \n 아래의 이미지를 참고해주세요!";
    //document.body.style.background = "rgb(255, 242, 204, 1)" 
    document.getElementById("bot_img").style.background =
    "url(./img/Mini_db.png) no-repeat";
  }

  // 코드론 미니 조종기  ---------------------------------------------------------------------------------------------------------

  else if (
      (inMsg.includes("코드론") && inMsg.includes("미니") && inMsg.includes("조종기")) || inMsg.includes("버튼") || inMsg.includes("눌림")) {
        document.getElementById("output").innerText = "코드론 조종기의 버튼이 눌리지 않는다면 \n 아래의 이미지를 참고해주세요!";
        document.getElementById("bot_img").style.background =
        "url(./img/Mini_controller.png) no-repeat";
      }

  else if (
        (inMsg.includes("코드론") && inMsg.includes("미니") && inMsg.includes("컨트롤러")) || inMsg.includes("버튼") || inMsg.includes("눌림")) {
          document.getElementById("output").innerText = "코드론 조종기의 버튼이 눌리지 않는다면 \n 아래의 이미지를 참고해주세요!";
          document.getElementById("bot_img").style.background =
          "url(./img/Mini_controller.png) no-repeat";
        }

  else if (
          (inMsg.includes("코드론") && inMsg.includes("미니") && inMsg.includes("조종기")) || inMsg.includes("리셋") || inMsg.includes("Reset") || inMsg.includes("RESET") || inMsg.includes("버튼")) {
            document.getElementById("output").innerText = "코드론 미니를 초기화 하는 방법은 \n 아래의 이미지를 참고해주세요!";
            document.getElementById("bot_img").style.background =
            "url(./img/Mini_reset.png) no-repeat";
          }
  
  else if (
            (inMsg.includes("코드론") && inMsg.includes("미니") && inMsg.includes("컨트롤러")) || inMsg.includes("리셋") || inMsg.includes("Reset") || inMsg.includes("RESET") || inMsg.includes("버튼")) {
              document.getElementById("output").innerText =  "코드론 미니를 초기화 하는 방법은 \n 아래의 이미지를 참고해주세요!";
              document.getElementById("bot_img").style.background =
              "url(./img/Mini_reset.png) no-repeat";
            }  

  else if (
            (inMsg.includes("코드론") && inMsg.includes("미니") && inMsg.includes("리셋")) || inMsg.includes("Reset") || inMsg.includes("RESET") || inMsg.includes("버튼")) {
              document.getElementById("output").innerText =  "코드론 미니를 초기화 하는 방법은 \n 아래의 이미지를 참고해주세요!";
              document.getElementById("bot_img").style.background =
              "url(./img/Mini_reset.png) no-repeat";
            }  

  else if (
              (inMsg.includes("코드론") && inMsg.includes("미니") && inMsg.includes("초기화")) || inMsg.includes("Reset") || inMsg.includes("RESET") || inMsg.includes("버튼")) {
                document.getElementById("output").innerText =  "코드론 미니를 초기화 하는 방법은 \n 아래의 이미지를 참고해주세요!";
                document.getElementById("bot_img").style.background =
                "url(./img/Mini_reset.png) no-repeat";
              }  

  else if (
                (inMsg.includes("코드론") && inMsg.includes("미니") && inMsg.includes("헤드리스"))) {
                  document.getElementById("output").innerText =  "코드론 미니의 헤드리스 모드 설명은 \n 아래의 이미지를 참고해주세요!";
                  document.getElementById("bot_img").style.background =
                  "url(./img/Mini_headless.png) no-repeat";
                }  

  else if (
                (inMsg.includes("코드론") && inMsg.includes("미니") && inMsg.includes("head"))) {
                  document.getElementById("output").innerText =  "코드론 미니의 헤드리스 모드 설명은 \n 아래의 이미지를 참고해주세요!";
                  document.getElementById("bot_img").style.background =
                  "url(./img/Mini_headless.png) no-repeat";
                  }  
  // 코드론 미니 이륙 안될때 ---------------------------------------------------------------------------------------------------------
  else if (
    (inMsg.includes("코드론") && inMsg.includes("미니")) && inMsg.includes("이륙")) {
      document.getElementById("output").innerText = "코드론 미니가 이륙하지 않는다면 \n 아래의 이미지를 참고해주세요!";
      document.getElementById("bot_img").style.background =
      "url(./img/Mini_x.png) no-repeat";
    }

  else if (
      (inMsg.includes("코드론") && inMsg.includes("미니")) && inMsg.includes("안")) {
        document.getElementById("output").innerText = "코드론 미니가 이륙하지 않는다면 \n 아래의 이미지를 참고해주세요!";
        document.getElementById("bot_img").style.background =
        "url(./img/Mini_x.png) no-repeat";
      }

  else if (
        (inMsg.includes("코드론") && inMsg.includes("미니")) && inMsg.includes("날아")) {
          document.getElementById("output").innerText = "코드론 미니가 이륙하지 않는다면 \n 아래의 이미지를 참고해주세요!";
          document.getElementById("bot_img").style.background =
          "url(./img/Mini_x.png) no-repeat";
        }

  else if (
          (inMsg.includes("코드론") && inMsg.includes("미니")) && inMsg.includes("이륙")) {
            document.getElementById("output").innerText = "코드론 미니가 이륙하지 않는다면 \n 아래의 이미지를 참고해주세요!";
            document.getElementById("bot_img").style.background =
            "url(./img/Mini_x.png) no-repeat";
          }



 // 코드론 미니 스펙/ 성능 안될때 ---------------------------------------------------------------------------------------------------------
  else if (
    (inMsg.includes("코드론") && inMsg.includes("미니")) && inMsg.includes("스펙")) {
    document.getElementById("output").innerText = "코드론 미니의 상세 성능은 \n 아래의 이미지를 참고해주세요!";
    document.getElementById("bot_img").style.background =
    "url(./img/Mini_spac.png) no-repeat";
  }
  else if (
    (inMsg.includes("코드론") && inMsg.includes("미니")) && inMsg.includes("성능")) {
    document.getElementById("output").innerText = "코드론 미니의 상세 성능은 \n 아래의 이미지를 참고해주세요!";
    document.getElementById("bot_img").style.background =
    "url(./img/Mini_spac.png) no-repeat";
  }
  else if (
    (inMsg.includes("코드론") && inMsg.includes("미니")) && inMsg.includes("spac")) {
    document.getElementById("output").innerText = "코드론 미니의 상세 성능은 \n 아래의 이미지를 참고해주세요!";
    document.getElementById("bot_img").style.background =
    "url(./img/Mini_spac.png) no-repeat";
  }
  else if (
    (inMsg.includes("코드론") && inMsg.includes("미니")) && inMsg.includes("비행시간")) {
    document.getElementById("output").innerText = "코드론 미니의 상세 성능은 \n 아래의 이미지를 참고해주세요!";
    document.getElementById("bot_img").style.background =
    "url(./img/Mini_spac.png) no-repeat";
  }
  else if (
    (inMsg.includes("코드론") && inMsg.includes("미니")) && inMsg.includes("충전")) {
    document.getElementById("output").innerText = "코드론 미니의 상세 성능은 \n 아래의 이미지를 참고해주세요!";
    document.getElementById("bot_img").style.background =
    "url(./img/Mini_spac.png) no-repeat";
  }
  else if (
    (inMsg.includes("코드론") && inMsg.includes("미니")) && inMsg.includes("시간")) {
    document.getElementById("output").innerText = "코드론 미니의 상세 성능은 \n 아래의 이미지를 참고해주세요!";
    document.getElementById("bot_img").style.background =
    "url(./img/Mini_spac.png) no-repeat";
  }
  else if (
    (inMsg.includes("코드론") && inMsg.includes("미니")) && inMsg.includes("센서")) {
    document.getElementById("output").innerText = "코드론 미니의 상세 성능은 \n 아래의 이미지를 참고해주세요!";
    document.getElementById("bot_img").style.background =
    "url(./img/Mini_spac.png) no-repeat";
  }
  else if (
    (inMsg.includes("코드론") && inMsg.includes("미니")) && inMsg.includes("통신")) {
    document.getElementById("output").innerText = "코드론 미니의 상세 성능은 \n 아래의 이미지를 참고해주세요!";
    document.getElementById("bot_img").style.background =
    "url(./img/Mini_kg.png) no-repeat";
  }
  else if (
    (inMsg.includes("코드론") && inMsg.includes("미니")) && inMsg.includes("무게")) {
    document.getElementById("output").innerText = "코드론 미니의 상세 성능은 \n 아래의 이미지를 참고해주세요!";
    document.getElementById("bot_img").style.background =
    "url(./img/Mini_kg.png) no-repeat";
  }
  else if (
    (inMsg.includes("코드론") && inMsg.includes("미니")) && inMsg.includes("크기")) {
    document.getElementById("output").innerText = "코드론 미니의 상세 성능은 \n 아래의 이미지를 참고해주세요!";
    document.getElementById("bot_img").style.background =
    "url(./img/Mini_spac.png) no-repeat";
  }
  else if (
    (inMsg.includes("코드론") && inMsg.includes("미니")) && inMsg.includes("거리")) {
    document.getElementById("output").innerText = "코드론 미니의 상세 성능은 \n 아래의 이미지를 참고해주세요!";
    document.getElementById("bot_img").style.background =
    "url(./img/Mini_kg.png) no-repeat";
  }

  // 디폴트 ---------------------------------------------------------------------------------------------------------
  //디폴트
  else {
    document.getElementById("output").innerText = "말씀하신 내용은 잘 모르겠어요! \n\n \"이름\"과 \"연락처\"를 남겨서\n 아래의 메일로 알려주시면\n답변 드리겠습니다!";
    document.getElementById("bot_img").style.background =
        "url(./img/ROE_as.png) no-repeat";
    document.getElementById("bot_img").style.backgroundSize = "contain";
  }
};