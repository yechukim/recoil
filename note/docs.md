## recoil basic  

### Recoil Root
> 루트 컴포넌트에 넣으면 좋음

### Atom
state의 일부

> 상태의 일부, 어디서나 읽고 쓸 수 있음\
> 아톰 변화 -> 해당 아톰을 구독하는 컴포넌트들 재렌더링 

### Selector
derived state의 일부

> 파생된 상태의 일부\
> 파생된 상태: 상태의 변화! 
> 즉, 다른 데이터에 의존하는 다른 데이터를 만들 수 있음
> 컴포넌트 입장에서는 atom 읽을 때와 같은 hook으로 selector 또한 읽을 수 있지만, 어떤 훅인 writable state 에만 쓸 수 있음(`useRecoilState`) 
✏️ 모든 atom은 writeable state, but not all selctors are writable state (get, set 프로퍼티 가지는 selectors)

### useRecoilValue()
>  selector 값 읽어오기

### useSetRecoilState()

### useRecoilState()

> 기본값 대신 react recoil 상태를 인수로 받는 다는 점을 빼면 `useState` 훅과 비슷함
