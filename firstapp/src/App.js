import React, { Component } from "react";
import "./App.css";
import MyComponent from "./components/Greet";
import { Welcome } from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import PersonList from "./components/PersonList";
import ApplyCss from "./components/ApplyCss";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import MyForm from "./components/MyForm";
import LifeCycleA from "./components/LifeCycleA";
import ParentComponentNew from "./components/ParentComponentNew";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParent from "./components/FRParent";
import PortalDemo from "./components/PortalDemo";
import ErrorBoundary from "./components/ErrorBoundary";
import Hero from "./components/Hero";
import CounterClick from "./components/CounterClick";
import CounterHover from "./components/CounterHover";
import User from "./components/User";
import CounterNew from "./components/CounterNew";
import CountClickOne from "./components/ClickCounterOne";
import CountClickTwo from "./components/ClickCounterTwo";
import ComponentA from "./components/ComponentA";
import { UserProvider } from "./components/UserContext";
import PostList from "./components/PostList";
import FormPost from "./components/FormPost";
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <FormPost></FormPost> */}
        {/* <PostList></PostList> */}
        {/* <UserProvider value="Prakash">
          <ComponentA></ComponentA>
        </UserProvider>{" "} */}
        {/* <CounterNew>
          {(count, countHandler) => (
            <CountClickOne
              count={count}
              countHandler={countHandler}
            ></CountClickOne>
          )}
        </CounterNew>
        <CounterNew>
          {(count, countHandler) => (
            <CountClickTwo
              count={count}
              countHandler={countHandler}
            ></CountClickTwo>
          )}
        </CounterNew> */}
        {/* <User
          render={(isLoggedIn) => (isLoggedIn ? "Prakash" : "guest")}
        ></User> */}
        {/* <CounterClick name="Prakash"></CounterClick>
        <CounterHover></CounterHover> */}
        {/* <ErrorBoundary>
          <Hero heroName="shaktiman"></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Superman"></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker"></Hero>
        </ErrorBoundary>  */}
        {/* <PortalDemo></PortalDemo> */}
        {/* <FRParent></FRParent> */}
        {/* <FocusInput></FocusInput> */}
        {/* <RefsDemo></RefsDemo> */}
        {/* <ParentComponentNew></ParentComponentNew> */}
        {/* <LifeCycleA></LifeCycleA> */}
        {/* <MyForm></MyForm> */}
        {/* <h1 className="error"> Apply regular CSS stylesheet </h1>
        <h1 className={styles.success}>Apply Module CSS</h1>
        <ApplyCss isApplyCss={true}></ApplyCss>
         */}
        {/* <PersonList></PersonList> */}
        {/* <UserGreeting></UserGreeting> */}
        {/* <ParentComponent /> */}
        {/* <FunctionClick> </FunctionClick> */}
        {/* <ClassClick></ClassClick> */}
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <MyComponent name="Bhai" hero="apun">
          <p> This is chidren props</p>
        </MyComponent>
        // <Welcome name="example" /> */}
        {/*<Hello /> */}
        {/* <ParentComponentNew></ParentComponentNew> */}
        {/* <RefsDemo></RefsDemo> */}
        <ParentComponent></ParentComponent>
      </div>
    );
  }
}

export default App;
