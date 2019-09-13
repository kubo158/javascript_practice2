'use strict'; {
  //＊＊＊＊＊　Dom開始　＊＊＊＊＊
  window.addEventListener('DOMContentLoaded', () => {

    //----------------------------------------
    // workBtnを生成する関数
    // [引数]
    //   なし
    // [戻り値]
    //   workBtn：タスクの作業中と完了を切り替えるボタン
    //----------------------------------------
    const createWorkBtn = function () {
      //ボタンを生成
      const workBtn = document.createElement('button');
      workBtn.textContent = '作業中';
      workBtn.classList.add('work');

      //●●●●　作業中イベントボタン　●●●●
      workBtn.addEventListener('click', (e) => {
        switch (workBtn.textContent) {
          case '作業中':
            workBtn.textContent = ('完了');
            workBtn.classList.remove('work');
            workBtn.classList.add('done');
            break;

          case '完了':
            workBtn.textContent = ('作業中');
            workBtn.classList.remove('done');
            workBtn.classList.add('work');
            break;

          default:
            break;
        }
      });

      return workBtn;
    }

    //----------------------------------------
    // removeBtnを生成する関数
    // [引数]
    //   なし
    // [戻り値]
    //   removeBtn：タスクを削除するボタン
    //----------------------------------------
    const createRemoveBtn = function () {
      const removeBtn = document.createElement('button');
      removeBtn.textContent = `削除`;

      //●●●●　removeBtn押下時のイベントを追加　●●●●
      removeBtn.addEventListener('click', (e) => {
        removeBtn.parentNode.parentNode.parentNode.removeChild(removeBtn.parentNode.parentNode);
      });

      return removeBtn;
    }

    //----------------------------------------
    // taskエレメントを生成する関数
    // [引数]
    //   id：taskのID
    //   taskComment：フォームに入力されたtaskの内容
    // [戻り値]
    //   taskElement：タスクを表示するtr要素
    //----------------------------------------
    const createTodoList = function (id, taskComment) {

      //▲▲▲▲　tr エレメントを新規作成(ただ生成するだけ)　▲▲▲▲
      const taskElement = document.createElement('tr');

      //---- td idエレメントを新規作成 ----
      const idElement = document.createElement('td');
      idElement.textContent = id;

      //---- td commentエレメントを新規作成 ----
      const commentElement = document.createElement('td');
      if (taskComment == '') {
        return false;
      } else {
        commentElement.textContent = taskComment;
      }

      //---- td workBtnエレメントを新規作成 ----
      const workBtnElement = document.createElement('td');
      const workBtn = createWorkBtn();
      workBtnElement.appendChild(workBtn);

      //---- td removeBtnエレメントを新規作成 ----
      const removeBtnElement = document.createElement('td');
      const removeBtn = createRemoveBtn();
      removeBtnElement.appendChild(removeBtn);

      //生成したtdをtrにセット
      taskElement.appendChild(idElement);
      taskElement.appendChild(commentElement);
      taskElement.appendChild(workBtnElement);
      taskElement.appendChild(removeBtnElement);

      return taskElement;
    }

    //----------------------------------------
    // タスクの表示を切り替える関数
    // [引数]
    //   radioType：選択されているラジオボタンのタイプ
    // [戻り値]
    //   なし
    //----------------------------------------

    const displayTask = function (radioType) {
      const workList = document.querySelectorAll('.work');
      const doneList = document.querySelectorAll('.done');

      switch (radioType) {
        case 'all':
          workList.forEach(workList => {
            workList.parentNode.parentNode.style.display = "";
          });
          doneList.forEach(doneList => {
            doneList.parentNode.parentNode.style.display = "";
          });
          break;

        case 'work':
          workList.forEach(workList => {
            workList.parentNode.parentNode.style.display = "";
          });
          doneList.forEach(doneList => {
            doneList.parentNode.parentNode.style.display = "none";
          });
          break;

        case 'done':
          workList.forEach(workList => {
            workList.parentNode.parentNode.style.display = "none";
          });
          doneList.forEach(doneList => {
            doneList.parentNode.parentNode.style.display = "";
          });
          break;

        default:
          break;
      }
    }

    //----------------------------------------
    // グローバル変数
    //----------------------------------------
    let index = 1; //タスクID用のインデックス
    let selectedRadioType = 'all'; //選択されているラジオボタンのタイプ


    //＊＊＊＊＊　追加ボタンイベントを押下したときの処理　＊＊＊＊＊
    const addButton = document.getElementById('addButton');

    addButton.addEventListener('click', () => {

      //<tbody>タグを取得
      const todoList = document.getElementById('todoList');

      //<iuput>タグに入力された値を取得
      const inputContent = document.getElementById('inputContent').value;

      //taskエレメントをtbody内に追加
      const taskElem = createTodoList(index, inputContent);
      if (taskElem) todoList.appendChild(taskElem);

      //タスクを表示
      displayTask(selectedRadioType);

      //indexをインクリメント
      index++;
    });
    //＊＊＊＊＊　終了　＊＊＊＊＊

    //＊＊＊＊＊　ラジオボタンを押下した時の処理　＊＊＊＊＊
    const radioAll = document.getElementById('radioAll');
    const radioDoing = document.getElementById('radioDoing');
    const radioComplete = document.getElementById('radioComplete');

    radioAll.addEventListener('change', () => {
      selectedRadioType = 'all';
      displayTask(selectedRadioType);
    });

    radioDoing.addEventListener('change', () => {
      selectedRadioType = 'work';
      displayTask(selectedRadioType);
    });

    radioComplete.addEventListener('change', () => {
      selectedRadioType = 'done';
      displayTask(selectedRadioType);
    });
    //＊＊＊＊＊　終了　＊＊＊＊＊
  });
}
