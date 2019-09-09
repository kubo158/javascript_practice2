'use strict'; {



  //＊＊＊＊＊　Dom開始　＊＊＊＊＊
  window.addEventListener('DOMContentLoaded', () => {

    //１．<iuput>タグを取得する
    const inputContent = document.getElementById('inputContent');

    //２．<tbody>タグを取得する
    const todoList = document.getElementById('todoList');


    //追加ボタンの要素を取得
    const addButton = document.getElementById('addButton');

    const todos = [];

    //＊＊＊＊＊　追加ボタンイベントを押す　＊＊＊＊＊
    addButton.addEventListener('click', () => {

      const id = todos.length;
      const comment = inputContent.value;
      let switchBtn = '作業中';
      const dlt = '削除';

      let task = {
        id,
        comment,
        switchBtn,
        dlt
      };

      todos.push(task);

      console.log(todos);
      // todos.forEach((item, index) => {
      //   console.log(`${index}: ${item}`);
      // });


      //▲▲▲▲　tr エレメントを新規作成(ただ生成するだけ)　▲▲▲▲
      let tr = document.createElement('tr');
      tr.classList.add('work');

      //---- td idエレメントを新規作成 ----
      let td = document.createElement('td');
      //tdの中に入れたいモノをセット
      td.textContent = id;
      //生成したtdをtrにセット
      tr.appendChild(td);
      //---- td idエレメント終わり ----


      //---- td inputした内容を新規作成 ----
      td = document.createElement('td');
      //tdの中に入れたいモノをセット
      if (comment == '') {
        return false;
      } else {
        td.textContent = comment;
      }
      //生成したtdをtrにセット
      tr.appendChild(td);
      //---- td 入力した内容終わり ----


      //---- td 作業中ボタンを新規作成 ----
      td = document.createElement('td');
      //ボタンをセット
      const btn = document.createElement('button');
      btn.textContent = (switchBtn);
      td.appendChild(btn);
      tr.appendChild(td);
      //---- td 作業中ボタン終わり ----


      //●●●●　作業中イベントボタン　●●●●
      btn.addEventListener('click', (e) => {

        switch (switchBtn) {
          case '作業中':
            switchBtn = '完了';
            btn.textContent = (switchBtn);
            tr.classList.remove('work');
            tr.classList.add('done');
            if (task.switchBtn === '作業中') {
              task.switchBtn = '完了'
            }
            console.log(todos);
            break;
          case '完了':
            switchBtn = '作業中';
            btn.textContent = (switchBtn);
            tr.classList.remove('done');
            tr.classList.add('work');
            if (task.switchBtn === '完了') {
              task.switchBtn = '作業中'
            }
            console.log(todos);
            break;
        }
      });
      //●●●●　作業中イベントボタン終わり　●●●●


      //---- td 削除を新規作成 ----
      td = document.createElement('td');
      const removeBtn = document.createElement('button');
      removeBtn.textContent = (dlt);
      td.appendChild(removeBtn);
      tr.appendChild(td);
      //---- td 削除ボタン終わり ----

      todoList.appendChild(tr);
      //▲▲▲▲　エレメントをtbody内に追加　▲▲▲▲


      //●●●●　削除イベントボタン　●●●●
      removeBtn.addEventListener('click', (e) => {
        const idx = Array.from(document.querySelectorAll('.remove button')).indexOf(e.target);
        console.log(idx);
        todos.splice(idx, 1);
        const element1 = e.target.closest('tr');
        element1.parentNode.removeChild(element1);
        console.log(todos);
      });
      //●●●●　削除イベントボタン終わり　●●●●



      // ラジオボタンの要素を取得
      const radioAll = document.getElementById('radioAll');
      const radioDoing = document.getElementById('radioDoing');
      const radioComplete = document.getElementById('radioComplete');
      //＊＊＊＊＊　ラジオボタンを押した時の関数を作る　＊＊＊＊＊




      radioAll.addEventListener('change', () => { //全て

        function allForEach() {
          const workList = document.querySelectorAll('.work');
          const doneList = document.querySelectorAll('.done');
          workList.forEach((workList) => {
            workList.style.display = "";
          });
          doneList.forEach((doneList) => {
            doneList.style.display = "";
          });
        }

        allForEach();

        btn.addEventListener('click', (e) => {
          allForEach();
        });
      });

      radioDoing.addEventListener('change', () => { //作業中
        const progress = todos.filter(x => x.switchBtn === '作業中');

        function workForEach() {
          const workList = document.querySelectorAll('.work');
          const doneList = document.querySelectorAll('.done');
          workList.forEach((workList) => {
            workList.style.display = "";
          });
          doneList.forEach((doneList) => {
            doneList.style.display = "none";
          });
        }

        workForEach();

        btn.addEventListener('click', (e) => {
          workForEach();
        });
        console.log(progress);
      });

      radioComplete.addEventListener('change', () => { //完了
        const complete = todos.filter(x => x.switchBtn === '完了');

        function doneForEach() {
          const workList = document.querySelectorAll('.work');
          const doneList = document.querySelectorAll('.done');
          workList.forEach((workList) => {
            workList.style.display = "none";
          });
          doneList.forEach((doneList) => {
            doneList.style.display = "";
          });
        }
        doneForEach();

        btn.addEventListener('click', (e) => {
          doneForEach();
        });
        console.log(complete);
      });
      //＊＊＊＊＊　ラジオボタン終わり　＊＊＊＊＊

    });
    //　＊＊＊＊＊　追加ボタン終わり　＊＊＊＊＊

    //＊＊＊＊＊　Dom終わり　＊＊＊＊＊
  });

  // use strictの終わり
}
