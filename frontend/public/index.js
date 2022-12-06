function Spa() {
  return (
    <HashRouter>
      <div>
        <NavBar/>        
        <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:0, role:'Admin'}]}}>
          <div className="container" style={{padding: "20px"}}>
            <Route path="/" exact component={Home} />
            <Route path="/createaccount/" component={CreateAccount} />
            <Route path="/login/" component={Login} />
            <Route path="/showbooks/" component={Books} /> 
            <Route path="/alldata/" component={AllData} />          
          </div>
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
