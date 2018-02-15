import React, { Component } from 'react'
import { Alert, AppRegistry, Button, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

class Field extends Component {
  constructor (props) {
    super(props)

    this.killField = this.killField.bind(this)
    this.restart = this.restart.bind(this)
    this.generateImage = this.generateImage.bind(this)

    this.state = {
      showImage: true
    }
  }

  componentWillReceiveProps (nextProps) {
    this.restart()
  }

  killField (item) {
    this.setState((prevState, props) => ({
      showImage: false,
      image: ''
    }))
    this.props.creatureClick(item)
  }

  generateImage () {
    let astronaut = require('./img/astronaut.png')
    let alien = require('./img/alien.png')

    let randomElementOf = (items) => {
      return items[Math.floor(Math.random() * items.length)]
    }

    return randomElementOf([astronaut, alien, ''])
  }

  restart () {
    this.setState((prevState, props) => ({
      showImage: true,
      image: this.generateImage()
    }))
  }

  componentWillMount () {
    this.setState((prevState, props) => ({
      showImage: true,
      image: this.generateImage()
    }))
  }

  render () {
    let image = <Image />
    if (this.state.showImage && this.state.image !== '') {
      image = <Image style={{ width: 50, height: 50, overflow: 'hidden' }} source={this.state.image} />
    }
    return (
      <View style={{ paddingLeft: this.props.left }}>
        <View style={styles.field}>
          <TouchableOpacity onPress={() => { this.killField(this.state.image) }}>
            {image}
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

class ProgressBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      timer: 0
    }

    this.tick = this.tick.bind(this)
    this.restart = this.restart.bind(this)
  }

  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick(),
      100,
    )
  }

  restart () {
    this.setState((prevState, props) => ({
      timer: 100
    }))
  }

  tick () {
    this.setState((prevState, props) => ({
      timer: prevState.timer + 100
    }))
  }

  render () {
    if (this.state.timer === 30000) { this.props.onEnd() }

    let width = Dimensions.get('window').width - 20

    let position = width * (1 - (this.state.timer / 30000))
    if (position < 0) {
      position = 0
    } else if (width < position) {
      position = width
    }

    let color
    if (this.state.timer < 25) { color = 'red' } else if (this.state.timer < 50) { color = 'orange' } else { color = 'green' }

    return (
      <View style={[styles.container, { width: position, height: 20, backgroundColor: color }]} />
    )
  }
}

class Board extends Component {
  constructor (props) {
    super(props)

    let { height, width } = Dimensions.get('window')

    this.state = {
      fields: [],
      height: height,
      width: width
    }

    this.onCreatureClick = this.onCreatureClick.bind(this)
    this.restart = this.restart.bind(this)
  }

  componentDidMount () {
    this.setState((prevState, props) => ({
      fields: this.generateFields()
    }))
  }

  onCreatureClick (id) {
    this.props.onCreatureClick(id)
  }

  generateFields () {
    let height = this.state.height - 170
    if (height < 0) {
      height = 0
    }

    let width = this.state.width - 90
    if (width < 0) {
      width = 0
    }

    let randomIntegerBetween = (min, max) => {
      return Math.random() * (max - min) + min
    }

    let fields = []

    let maxFields = height / 50 - 1
    for (let i = 0; i < maxFields; i++) {
      fields.push(
        {
          key: i,
          left: randomIntegerBetween(0, width)
        }
      )
    }

    return fields
  }

  restart () {
    this.setState((prevState, props) => ({
      fields: this.generateFields()
    }))
  }

  render () {
    return (
      <View style={[styles.container, styles.board, { height: this.state.height - 170 }]}>
        {
          this.state.fields.map(function (field) {
            return (<Field key={field.key}
              left={field.left}
              creatureClick={this.onCreatureClick} />)
          }, this)
        }
      </View>
    )
  }
}

class Status extends Component {
  constructor (props) {
    super(props)

    this.alienKilled = this.alienKilled.bind(this)
    this.astronautLost = this.astronautLost.bind(this)
    this.restart = this.restart.bind(this)

    this.state = {
      aliensKilled: 0,
      astronautsLost: 0
    }
  }

  alienKilled () {
    this.setState((prevState, props) => ({
      aliensKilled: prevState.aliensKilled + 1
    }))
  }

  astronautLost () {
    this.setState((prevState, props) => ({
      astronautsLost: prevState.astronautsLost + 1
    }))
  }

  restart () {
    this.setState((prevState, props) => ({
      astronautsLost: 0,
      aliensKilled: 0
    }))
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Aliens killed: {this.state.aliensKilled}</Text>
        <Text>Astronauts lost: {this.state.astronautsLost}</Text>
      </View>
    )
  }
}

export default class Main extends Component {
  constructor (props) {
    super(props)

    this.state = {
      aliensKilled: 0,
      astronautsLost: 0
    }

    this.onCreatureClick = this.onCreatureClick.bind(this)
    this.showEnd = this.showEnd.bind(this)
    this.restart = this.restart.bind(this)
  }

  restart () {
    this.refs.status.restart()
    this.refs.progressBar.restart()
    this.refs.board.restart()
  }

  showEnd () {
    Alert.alert('Time out!', "You've run out of time.",
      [{text: 'RESTART', onPress: () => this.restart()}],
      { cancelable: false },
    )
  }

  onCreatureClick (id) {
    if (id === 1) {
      this.refs.status.astronautLost()
    } else if (id === 2) {
      this.refs.status.alienKilled()
    }
  }

  onRespawn () {
    this.refs.board.restart()
  }

  render () {
    return (
      <View>
        <ProgressBar ref='progressBar' onEnd={this.showEnd} percent={100} />
        <Board ref='board' onCreatureClick={this.onCreatureClick} />
        <Status ref='status' />
        <View style={styles.container}>
          <Button
            title='RESPAWN'
            color='#2196f3'
            onPress={() => this.onRespawn()}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 7
  },
  board: {
    padding: 3,
    borderWidth: 2
  },
  field: {
    borderRadius: 100,
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#3f3f3c'
  }
})

AppRegistry.registerComponent('AwesomeProject', () => Main)
