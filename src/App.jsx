import React, { Component } from "react";
import uniqid from "uniqid";

import "./App.css";
import Countdown from "./Countdown";
import EditEvent from "./EditEvent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      now: {
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        seconds: new Date().getSeconds()
      },
      events: [],
      editedEvent: { id: uniqid(), name: "", hour: -1, minute: -1 }
    };

    this.timer = this.timer.bind(this);
    this.handleEditEvent = this.handleEditEvent.bind(this);
    this.handleSaveEvent = this.handleSaveEvent.bind(this);
    this.handleRemoveEvent = this.handleRemoveEvent.bind(this);
    this.handleEditInit = this.handleEditInit.bind(this);
    this.handleEditCancel = this.handleEditCancel.bind(this);
  }

  timer() {
    this.setState({
      now: {
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        seconds: new Date().getSeconds()
      }
    });
  }

  componentDidMount() {
    const storageEvents = JSON.parse(localStorage.getItem("events")) || [];
    this.setState({ events: storageEvents });

    const intervalId = setInterval(this.timer, 1000);
    this.setState({ intervalId: intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  handleEditEvent(val) {
    // this.setState({ editedEvents: val });
    this.setState(prevState => {
      return {
        editedEvent: Object.assign(prevState.editedEvent, val)
      };
    });
  }

  handleSaveEvent() {
    this.setState(
      prevState => {
        const editedEventExists = prevState.events.find(
          el => el.id === prevState.editedEvent.id
        );

        let updatedEvents;
        if (editedEventExists) {
          updatedEvents = prevState.events.map(el => {
            if (el.id === prevState.editedEvent.id)
              return prevState.editedEvent;
            else return el;
          });
        } else {
          updatedEvents = [...prevState.events, prevState.editedEvent];
        }

        return {
          events: updatedEvents,
          editedEvent: { id: uniqid(), name: "", hour: -1, minute: -1 }
        };
      },
      () => localStorage.setItem("events", JSON.stringify(this.state.events))
    );

    // this.setState(prevState => ({
    //   events: [...prevState.events, prevState.editedEvent],
    //   editedEvent: {
    //     id: uniqid(),
    //     name: "",
    //     hour: "",
    //     minute: ""
    //   }
    // }));
  }

  handleRemoveEvent(id) {
    this.setState(
      prevState => ({
        events: prevState.events.filter(el => el.id !== id)
      }),
      () => localStorage.setItem("events", JSON.stringify(this.state.events))
    );
  }

  handleEditInit(id) {
    this.setState(prevState => ({
      editedEvent: { ...prevState.events.find(el => el.id === id) }
    }));
  }

  handleEditCancel() {
    this.setState({
      editedEvent: { id: uniqid(), name: "", hour: -1, minute: -1 }
    });
  }

  render() {
    const events = this.state.events.map(el => {
      return (
        <Countdown
          key={el.id}
          id={el.id}
          name={el.name}
          hour={el.hour}
          minute={el.minute}
          timeNow={this.state.now}
          onRemove={id => this.handleRemoveEvent(id)}
          onEditInit={id => this.handleEditInit(id)}
        />
      );
    });
    return (
      <div className="app">
        {events}
        <EditEvent
          name={this.state.editedEvent.name}
          hour={this.state.editedEvent.hour}
          minute={this.state.editedEvent.minute}
          onInputChange={val => this.handleEditEvent(val)}
          onSave={() => this.handleSaveEvent()}
          onCancel={() => this.handleEditCancel()}
        />
      </div>
    );
  }
}

export default App;
