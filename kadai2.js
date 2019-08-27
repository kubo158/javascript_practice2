'use strict'; {

  //追加ボタンの要素を取得
  let addButton = document.getElementById('addButton');

  //１．<iuput>タグを取得する
  let todoContent = document.getElementById('todoContent');

  //２．<tbody>タグを取得する
  let todoList = document.getElementById('todoList');

  // IDの初期値
  let countUpValue = 0;




  //追加ボタンを押す
  addButton.addEventListener('click', () => {

  //Inputnの入力値を取得
  let todoContentValue = todoContent.value;
  if (todoContentValue =='') {
    return false;
  }

    //tr エレメントを新規作成(ただ生成するだけ)
    let tr = document.createElement('tr');
          tr.classList.add('addTr');

      //td エレメントを新規作成(ただ生成するだけ)
      let td = document.createElement('td');
      td.classList.add('id');
      //tdの中に入れたいモノをセット
      td.textContent = (countUpValue);
      countUpValue++;
      //生成したtdをtrにセット
      tr.appendChild(td);


      //td エレメントを新規作成(ただ生成するだけ)
      td = document.createElement('td');
      td.classList.add('comment');
      //tdの中に入れたいモノをセット
      td.textContent = (todoContentValue);
      //生成したtdをtrにセット
      tr.appendChild(td);



      td = document.createElement('td');
      td.classList.add('state');
      //ボタンをセット
      let btn = document.createElement('button');
      btn.textContent = ('作業中');
      td.appendChild(btn);
      tr.appendChild(td);


      td = document.createElement('td');
      td.classList.add('button');
      let removeBtn = document.createElement('button');
      removeBtn.textContent = ('削除');
      td.appendChild(removeBtn);
      tr.appendChild(td);


    //tr エレメントをtbody内に追加(ここではじめて表示される)
    todoList.appendChild(tr);

    //上記、生成した要素の配列化
    let todo = [];
    todo.push('.id', '.comment', 'btn', 'removeBtn');
    console.log(todo);


    btn.addEventListener('click', () => {
      if(btn.textContent === ('作業中')) {
      btn.textContent = ('完了');
    } else {
      btn.textContent = ('作業中');
    }
    });

    removeBtn.addEventListener('click', () => {
      //要素が無くなった時は、カウントを0に戻したい。
      if(tr === null) {
        countUpValue = 0;}
      const element1 = document.querySelector('.addTr');
        element1.parentNode.removeChild(element1);
    });

  });
}
