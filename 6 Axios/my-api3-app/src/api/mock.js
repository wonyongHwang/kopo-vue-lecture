// src/api/mock.js
import MockAdapter from 'axios-mock-adapter'
import api from './axiosInstance'

// mock 활성화 함수
export function setupMock() {
  const mock = new MockAdapter(api, { delayResponse: 800 }) // 0.8초 딜레이

  // GET /api/todos 에 대한 가짜 응답
  mock.onGet('/api/todos').reply(200, [
    { id: 1, title: 'Vue.js 강의 준비', done: false },
    { id: 2, title: 'Axios 실습 코드 작성', done: true },
    { id: 3, title: '학생 과제 피드백', done: false },
  ])

  // POST /api/todos 에 대한 가짜 응답
  mock.onPost('/api/todos').reply(config => {
    const newTodo = JSON.parse(config.data)
    newTodo.id = Date.now()
    return [201, newTodo]
  })
}
