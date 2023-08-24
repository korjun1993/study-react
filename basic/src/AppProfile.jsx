import Profile from "./components/Profile";

function AppProfile() {
  const handleClick = event => {
    console.log(event);
    alert('버튼이 클릭됨!');
  };
  return (
      <>
        <button onClick={handleClick}>
          버튼
        </button>
        <form onSubmit={() => {}}>
          제출
        </form>
        <Profile 
          image='logo192.png'
          title='프론트엔드 개발자'
          isNew= {true}/>
        <Profile 
          image='logo192.png'
          title='백엔드 개발자'
          isNew={false} />
      </>
  );
}

export default AppProfile;