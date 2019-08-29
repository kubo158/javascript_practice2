'use strict'; {

  // ラジオボタンの要素を取得
  const radioAll = document.getElementById('radioAll');
  const radioDoing = document.getElementById('radioDoing');
  const radioComplete = document.getElementById('radioComplete');


  //追加ボタンの要素を取得
  const addButton = document.getElementById('addButton');

  //１．<iuput>タグを取得する
  const todoContent = document.getElementById('todoContent');

  //２．<tbody>タグを取得する
  const todoList = document.getElementById('todoList');


  // id初期値
  let num = 0;



  //追加ボタンを押す
  addButton.addEventListener('click', () => {

    //上記、生成した要素の配列化
    const todos = [];
    const task = {};


    //ラジオボタンを押す
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

    //Inputnの入力値を取得
    const todoContentValue = todoContent.value;


    task.id = num;
    task.comment = todoContentValue;
    task.status = '作業中';
    todos.push(task);
    console.log(task);



    if (todoContentValue == '') {
      return false;
    }

    //tr エレメントを新規作成(ただ生成するだけ)
    let tr = document.createElement('tr');
    tr.classList.add('addTr');

    //td idエレメントを新規作成(ただ生成するだけ)
    let td = document.createElement('td');
    td.classList.add('id');
    //tdの中に入れたいモノをセット
    td.textContent = (num);
    num++;
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
    const btn = document.createElement('button');
    btn.textContent = (task.status);
    td.appendChild(btn);
    tr.appendChild(td);


    btn.addEventListener('click', () => {
      switch (task.status) {
        case '作業中':
          task.status = '完了';
          console.log(task);
          btn.textContent = (task.status);
          break;
        case '完了':
          task.status = '作業中';
          btn.textContent = (task.status);
          break;
      }
    });




    td = document.createElement('td');
    const removeBtn = document.createElement('button');
    removeBtn.textContent = ('削除');
    td.appendChild(removeBtn);
    tr.appendChild(td);

    //tr エレメントをtbody内に追加(ここではじめて表示される)
    todoList.appendChild(tr);
    removeBtn.addEventListener('click', () => {
      const element1 = document.querySelector('.addTr');
      element1.parentNode.removeChild(element1);
  });

  });


  // use strictの終わり
}
