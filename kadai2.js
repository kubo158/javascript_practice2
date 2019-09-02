'use strict'; {

  // ラジオボタンの要素を取得
  const radioAll = document.getElementById('radioAll');
  const radioDoing = document.getElementById('radioDoing');
  const radioComplete = document.getElementById('radioComplete');


  //追加ボタンの要素を取得
  const addButton = document.getElementById('addButton');

  //１．<iuput>タグを取得する
  const inputContent = document.getElementById('inputContent');

  //２．<tbody>タグを取得する
  const todoList = document.getElementById('todoList');


  const todos = [];

  //　＊＊＊＊＊　追加ボタンイベントを押す　＊＊＊＊＊
  addButton.addEventListener('click', () => {

    const num = todos.forEach((index) => {
    });
    const inputContentValue = inputContent.value;
    const switchBtn ='作業中';
    const dlt = '削除';

    let task = {
      id: num,
      comment: inputContentValue,
      status: switchBtn,
      remove: dlt
    };

    todos.push(task);

    console.log(todos);


    //▲▲▲▲　tr エレメントを新規作成(ただ生成するだけ)　▲▲▲▲
    let tr = document.createElement('tr');
    tr.classList.add('addTr');

    //---- td idエレメントを新規作成 ----
    let td = document.createElement('td');
    td.classList.add('id');
    //tdの中に入れたいモノをセット
      td.textContent = (num);

    //生成したtdをtrにセット
    tr.appendChild(td);
    //---- td idエレメント終わり ----


    //---- td inputした内容を新規作成 ----
    td = document.createElement('td');
    td.classList.add('comment');
    //tdの中に入れたいモノをセット
    if (inputContentValue == '') {
      return false;
    } else {
    td.textContent = (inputContentValue);
    }
    //生成したtdをtrにセット
    tr.appendChild(td);
    //---- td 入力した内容終わり ----


    //---- td 作業中ボタンを新規作成 ----
    td = document.createElement('td');
    td.classList.add('state');
    //ボタンをセット
    const btn = document.createElement('button');
    btn.textContent = (switchBtn);
    td.appendChild(btn);
    tr.appendChild(td);
    //---- td 作業中ボタン終わり ----


  //●●●●　作業中イベントボタン　●●●●
    btn.addEventListener('click', () => {
      switch (switchBtn) {
        case '作業中':
          btn.textContent = '完了';
          todos.splice(2, 1, '完了');
              console.log(todos);
          break;
        case '完了':
          btn.textContent = '作業中';
          todos.splice(2, 1, '作業中');
              console.log(todos);
          break;
      }
    });
  //●●●●　作業中イベントボタン終わり　●●●●


    //---- td 削除を新規作成 ----
    td = document.createElement('td');
    td.classList.add('remove');
    const removeBtn = document.createElement('button');
    removeBtn.textContent = (dlt);
    td.appendChild(removeBtn);
    tr.appendChild(td);
    //---- td 削除ボタン終わり ----

    todoList.appendChild(tr);
    //▲▲▲▲　エレメントをtbody内に追加　▲▲▲▲


    //●●●●　削除イベントボタン　●●●●
    removeBtn.addEventListener('click', () => {
      const element1 = document.querySelector('.addTr');
      element1.parentNode.removeChild(element1);
      todos.length = 0;
      console.log(todos);
    });
    //●●●●　削除イベントボタン終わり　●●●●




    //＊＊＊＊＊　ラジオボタンを押した時の関数を作る　＊＊＊＊＊

    radioAll.addEventListener('change', () => {   //全て
    });

    radioDoing.addEventListener('change', () => {   //作業中
      const progress = todos.filter(x => x.status === '作業中')
      console.log(progress);
    });

    radioComplete.addEventListener('change', () => {   //完了
      const complete = todos.filter(x => x.status === '完了')
      console.log(complete);
    });
    //＊＊＊＊＊　ラジオボタン終わり　＊＊＊＊＊




  });
  //　＊＊＊＊＊　追加ボタン終わり　＊＊＊＊＊








  // use strictの終わり
}
