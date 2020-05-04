/** 
 ** 下方頁籤 button
 */

// 點選下方 nav button 觸發的事件
const btn = document.querySelectorAll('.btn');         // 下方 button
const content = document.querySelectorAll('.content'); // 中間 content 區域
btn.forEach(function (e) {
  let self = e;
  self.addEventListener('click', function () {
    btn.forEach(function (e) {
      e.removeAttribute('actived');
    });
    content.forEach(function (e) {
      e.classList.add('fadeOut');
    });
    self.setAttribute('actived', '');
    let show = self.getAttribute('attr-show');
    document.querySelector(`.${show}`).classList.remove('fadeOut');
  });
});

/**
 ** k01 基本資料區塊
 */

// 測試用的資訊
const basicData = {
  ver: 'Version 0.9.5',
  all: 100,
  countdown: 10,
  deviceId: 'Kebbi123'
};
const ver = document.getElementById('ver');                  // 版本
const date = document.getElementById('date');                // 日期
const deviceId = document.getElementById('deviceId');        // device ID
const AuthCode = document.getElementById('AuthCode');        // 授權碼輸入欄位
const registerBtn = document.getElementById('registerBtn');  // 授權碼確認按鈕
versionUpdate(basicData.ver);                                // 更新版本號
deviceIdUpdate(basicData.deviceId);                          // 更新 decide ID
authUpdate(basicData.countdown, basicData.all);              // 更新日期

// 更新授權彈出 popup window
const registerView = document.getElementById('registerView'); // 授權彈出的 popup window
const errorView = document.getElementById('errorView');       // 錯誤訊息 popup window
const errorViewMsg = document.querySelector('#errorView h2'); // 錯誤訊息的文字顯示區域
date.addEventListener('click', function () {
  AuthCode.value = '';
  registerView.removeAttribute('hidden');
});

// 送出確認按鈕點擊事件
registerBtn.addEventListener('click', async function () {
  // 如果已經輸入過授權碼 ( 不是全新的 )
  if (AuthCode.value == '' || !AuthCode.value) {
    errorView.removeAttribute('hidden');
    errorViewMsg.innerText = '哎呦！沒有輸入任何授權碼！'
  } else {
    registerBtn.setAttribute('disabled', '');
    let code = await checkAuthCode(AuthCode.value);  // 使用同步方式，保證已經確認驗證碼再繼續
    console.log('authCode: ' + code);
    registerBtn.removeAttribute('disabled');
    if (AuthCode.value == '1111') {
      errorView.removeAttribute('hidden');
      errorViewMsg.innerText = '噢！授權碼輸入錯誤囉！'
    } else {
      if (registerView.classList.contains('new')) {
        registerView.classList.remove('new');
      }
      registerView.setAttribute('hidden', '');
    }
  }
});

// 判斷驗證碼是否正確
function checkAuthCode(code) {
  return new Promise(resolve => {
    // setTimeout 是為了測試延遲使用，實際上應該要已收到資料的 response 為主
    setTimeout(() => {
      return resolve(code);
    }, 1000);
  });
}

// 更新日期
function authUpdate(c, a) {
  date.innerText = `剩餘 ${c} / ${a} 天`;
}
// 更新 decide ID
function deviceIdUpdate(id) {
  deviceId.innerText = id;
}
// 更新版本號
function versionUpdate(v) {
  ver.innerText = v;
}


/**
 ** k02 歷史紀錄區塊
 */

// 讀取歷史紀錄 json
let jsonDataOrigin;
jsonDataOrigin = '"{\"0\":{\"name\":\"揮雙手\",\"createTime\":\"2020-03-04 16:42:57\",\"url\":\"https://www.google.com.tw1\",\"lockFlag\":\"0\"},\"1\":{\"name\":\"前進後退機器人跳舞好開心\",\"createTime\":\"2020-03-04 16:44:18\",\"url\":\"https://www.google.com.tw2\",\"lockFlag\":\"0\"},\"2\":{\"name\":\"test1356789\",\"createTime\":\"2020-03-04 16:44:18\",\"url\":\"https://www.google.com.tw3\",\"lockFlag\":\"0\"},\"3\":{\"name\":\"test14\",\"createTime\":\"2020-03-04 16:44:18\",\"url\":\"https://www.google.com.tw4\",\"lockFlag\":\"0\"},\"4\":{\"name\":\"hello world my name is kebbi\",\"createTime\":\"2020-03-04 16:44:18\",\"url\":\"https://www.google.com.tw5\",\"lockFlag\":\"0\"},\"5\":{\"name\":\"hello world my name is kebbi\",\"createTime\":\"2020-03-04 16:44:18\",\"url\":\"https://www.google.com.tw6\",\"lockFlag\":\"0\"}}"';
let listData = loadJSON(jsonDataOrigin);
showList(listData);

// 點選歷史紀錄清單，彈出 popup window 確認是否執行專案
const hsView = document.getElementById('historyView');          // 彈出視窗
const runBtn = document.getElementById('runBtn');               // 彈出視窗內的 執行按鈕
const deleteBtn = document.getElementById('deleteBtn');         // 彈出視窗內的 刪除按鈕
const lockBtn = document.getElementById('lockBtn');             // 彈出視窗內的 鎖定按鈕
const hsViewH2 = document.querySelector('#historyView h2');     // 彈出視窗內顯示專案名稱
const hsViewSpan = document.querySelector('#historyView span'); // 彈出視窗內提示要刪除了
let historyValue, deleteStatus, lockStatus;

// 執行事件
runBtn.addEventListener('click', () => {
  console.log(historyValue);
  hsView.setAttribute('hidden', '');               // 關閉 popup window
  hsViewSpan.setAttribute('hidden', '');           // 隱藏 delete 提示訊息
});

// 刪除事件
deleteBtn.addEventListener('click', async function () {
  if (!deleteStatus) {
    // 點第一次的保護，出現提示訊息
    deleteStatus = true;
    deleteBtn.setAttribute('confirm', '');          // 顯示 confirm 效果
    hsViewSpan.removeAttribute('hidden');           // 顯示提示訊息
  } else {
    // 點第二次就真的刪除
    deleteBtn.setAttribute('deleting', '');              // 「正在刪除」的效果
    listData = await deleteData(listData, historyValue); // 刪除資料
    deleteBtn.removeAttribute('deleting');         // 隱藏「正在刪除」的效果
    hsView.setAttribute('hidden', '');             // 關閉 popup window
    hsViewSpan.setAttribute('hidden', '');         // 隱藏 delete 提示訊息
  }
});

// 鎖定事件
lockBtn.addEventListener('click', () => {
  if (lockStatus.flag == 0) {
    // 如果鎖定
    lockBtn.classList.remove('lock');                  // 顯示 lock icon
    lockStatus.ele.setAttribute('attr-lock', '1');     // 改變清單 attr-lock 值
    lockStatus.flag = 1;
    deleteStatus = false;                              // 還原刪除狀態
    hsViewSpan.setAttribute('hidden', '');             // 隱藏刪除提示
    deleteBtn.setAttribute('disabled', '');            // 刪除按鈕 disabled
    deleteBtn.removeAttribute('confirm');              // 移除 confirm 效果
    listData = lockData(listData, historyValue, "1");  // 更新 data
  } else {
    // 如果沒有鎖定
    lockBtn.classList.add('lock');                     // 隱藏 lock icon
    lockStatus.ele.setAttribute('attr-lock', '0');     // 改變清單 attr-lock 值
    lockStatus.flag = 0;
    deleteBtn.removeAttribute('disabled');             // 刪除按鈕移除 disabled
    listData = lockData(listData, historyValue, "0");  // 更新 data
  }
});

// 轉換 json 資料
function loadJSON(string) {
  // 如果有需要置換最開頭和最結尾的 " 使用下面這段，如果沒有就使用：replace(/\\/g,'')
  if (string) {
    // 如果有歷史紀錄，回傳 json 格式物件
    const jsonDataString = string.replace(/^"|"$|\\/g, '');
    const jsonData = JSON.parse(jsonDataString);
    let arrData = [];
    for (let key in jsonData) {
      arrData.push(jsonData[key]);
    }
    console.log(arrData);
    return arrData;
  } else {
    // 如果沒有歷史紀錄，回傳 false
    return false;
  }
}

// 將資料轉換成畫面上的清單
function showList(data) {
  const historyh2 = document.querySelector('.k02 h2');   // 如果沒有歷史紀錄，顯示提示文字
  const historyArea = document.querySelector('.k02 ul'); // 如果有歷史紀錄，顯示清單
  historyArea.innerHTML = '';
  // 如果有歷史紀錄，清單呈現
  if (data.length > 0) {
    historyh2.setAttribute('hidden', '');
    data.forEach(e => {
      historyArea.innerHTML = historyArea.innerHTML +
        `<li attr-val="${e.url}"><i attr-lock="${e.lockFlag}"></i><b>${e.name}</b><span>${e.createTime}</span><i class="lock" hidden></i></li>`;
    });
    listEvent();
  } else {
    // 如果沒有歷史紀錄，顯示對應訊息
    historyh2.removeAttribute('hidden');
  }
}

// 清單點擊事件
function listEvent() {
  const list = document.querySelectorAll('.k02 li');  // 歷史清單
  list.forEach(e => {
    if (e.getAttribute('catched') == null) {
      e.setAttribute('catched', '');  // 避免重複綁定，用一個屬性判斷
      let val = e.getAttribute('attr-val');
      let title = e.querySelector('b').innerText;
      e.addEventListener('click', () => {
        deleteStatus = false;                  // 開啟 popup window 後，重置 delete 狀態
        deleteBtn.removeAttribute('confirm');  // 開啟 popup window 後，重置 delete 狀態
        hsViewSpan.setAttribute('hidden', ''); // 開啟 popup window 後，隱藏 delete 提示訊息
        historyValue = val;                    // 紀錄現在是開了哪個歷史專案
        lockStatus = {                         // 紀錄目前專案鎖定狀態
          ele: e.querySelector('i'),
          flag: e.querySelector('i').getAttribute('attr-lock')
        };
        // 開啟 popup windows 時先判斷鎖定狀態，決定按鈕樣式
        if (lockStatus.flag == 0) {
          lockBtn.classList.add('lock');             // 顯示鎖定文字
          deleteBtn.removeAttribute('disabled');  // 刪除按鈕 disabled
        } else {
          lockBtn.classList.remove('lock');    // 顯示解除鎖定文字
          deleteBtn.setAttribute('disabled', '');  // 刪除按鈕不要 disabled
        }
        hsViewH2.innerText = title;
        console.log(title, lockStatus);
        hsView.removeAttribute('hidden');
      });
    }
  });
}

/** 刪除的行為
 * @param origin: 歷史紀錄的資料
 * @param val: 要刪除的資料
 */
async function deleteData(origin, val) {
  await deleteBackEnd(origin, val);
  return new Promise(resolve => {
    resolve(origin);
  });
}

// 串後端
function deleteBackEnd(origin, val) {
  return new Promise(resolve => {
    // setTimeout 是為了測試延遲使用，實際上應該要已收到資料的 response 為主
    setTimeout(() => {
      origin.forEach((e, i) => {
        switch (e.url) {
          case val:
            origin.splice(i, 1);
            break;
        }
      });
      console.log('刪除：' + val);
      console.log(origin);
      showList(origin); // 刪除資料後再次載入資料
      resolve();
    }, 300);
  });
}

// 鎖定的行為
function lockData(origin, val, flag) {
  origin.forEach(e => {
    switch (e.url) {
      case val:
        e.lockFlag = flag;
        break;
    }
  });
  return origin;
}

/**
 ** k03 進階功能區塊
 */

const pinCode = document.getElementById('pinCode');      // 密碼欄位
const typeBtn = document.querySelectorAll('.btn-type b') // 部署狀態按鈕

let password = '12345678';   // 預設密碼
pinCode.value = password;

let type = "1";              // 預設部署模式
typeBtn.forEach(e => {
  let self = e;
  if (self.getAttribute('attr-val') == type) {
    self.setAttribute('selected', '');
  }
  // 點選切換部署模式
  self.addEventListener('click', () => {
    typeBtn.forEach(e => {
      e.removeAttribute('selected');
    });
    self.setAttribute('selected', '');
    type = self.getAttribute('attr-val');
    switch (type) {
      case '1':
        console.log('隨時允許');
        break;
      case '0':
        console.log('閒置時允許');
        break;
      case '-1':
        console.log('不允許');
        break;
    }
  });
});

// 點擊儲存設定的 button 
const saveBtn = document.getElementById('saveBtn');  // 儲存按鈕
let saveStatus = false;                              // 儲存的狀態
saveBtn.addEventListener('click', async function(){
  password = pinCode.value;
  type = document.querySelector('.btn-type b[selected]').getAttribute('attr-val');
  console.log(password, type);
  saveBtn.classList.add('saving');
  saveStatus = true;
  await saveOption();
  saveBtn.classList.remove('saving'); // 儲存設定之後恢復儲存按鈕樣式
});

// 測試先用儲存資料到雲端
function saveOption(){
  return new Promise(resolve => {
    // 先使用 setTimeout 測試，實際應該要收到 response 之後再 resolve
    setTimeout(()=>{
      resolve();
    },1000);
  });
};

/**
 ** popup window 專用
 */

// popup window 關閉按鈕
const popupCloseBtn = document.querySelectorAll('.pop-window .close-btn');
popupCloseBtn.forEach(e => {
  let self = e;
  self.addEventListener('click', () => {
    hsViewSpan.setAttribute('hidden', '');  // 處理刪除訊息的收摺樣式
    self.parentElement.parentElement.setAttribute('hidden', '')
  });
});