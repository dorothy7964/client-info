# Node.js Express 서버 개발 구축 하기 전 환경설정

**루트 폴더에 package.json을 생성**합니다.  
package.json 파일에서는 `client 폴더`에서 `클라이언트 모듈`을 실행하고,   
`루트 폴더`에서는 `서버 모듈`을 실행하도록 명시해주도록 하겠습니다.

***루트 폴더 package.json**

```javascript
{
    "name": "management",
    "version": "1.0.0",
    "scripts": {
        "client": "cd client && yarn start",
        "server": "nodemon server.js",
        "dev": "concurrently --kill-others-on-fail \"yarn server\" \"yarn client\""
    },
    "dependencies": {
        "body-parser": "^1.18.3",
        "express": "^4.16.4"
    },
    "devDependencies": {
        "concurrently": "^4.0.1"
    }
}
```

이제 루트 폴더에 클라이언트와 동일한 형태의 .gitignore 파일을 위치시킵니다. 

이 .gitignore 파일이 없으면 우리가 설치한 노드 모듈 또한 모두 깃 허브(Git Hub)에 올라가기 때문에 비효율적입니다. 

이후에 루트 폴더를 기준으로 `nodemon을` 설치합니다.

```javascript
yarn global add nodemon
```

이제 서버 모듈 개발을 위해 루트 폴더에 server.js 파일을 생성합니다.

```javascript
// express - 웹 서버에서 필요한 대부분 기능이 이미 구현되어 있는 웹 프레임 워크
// body-parser - JSON 형태 데이터 파싱	
yarn add express body-parser
```

**server.js**

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
res.send({ message: 'Hello Express!' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
```

이후에 node server.js 명령어로 서버를 구동시킬 수 있습니다.

```javascript
node server.js
```

server.js 위치한 곳에서 실행하기


## ※ GET 방식의 API 테스트하기 ※

[localhost:5000/api/hello](http://localhost:5000/api/hello)