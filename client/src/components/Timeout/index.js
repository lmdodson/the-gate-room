import React, {Component} from 'react'
import ReactTimeout from 'react-timeout'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';

import { Row, Col, Container } from "reactstrap"
import "./style.css"
 
class Timeout extends Component {
  state = {
    on: false
  }
  toggle = () => {
    this.setState({ on: !this.state.on })
  }
  change = () => {
    this.props.setTimeout(this.toggle, 5000) // call the `toggle` function after 5000ms
  }

  componentDidMount = () => {
    this.change()
  }
  render () {
// Intro
  return (
  <Container className="d-flex flex-column intro-text">
      <div style={{ visibility: (this.state.on ? 'visible' : 'hidden')}}>
      {/* Start */}
      <Row>
        <Col md="auto">
          <p className="guide">
            “Relax and listen to the sound of my voice”
          </p>
        </Col>
      </Row>
      <div>
      <Row>
        <Col md="auto">
          <p>
            You shift in the chair, as if the resistance from your mind has trickled down and spread throughout your body. Your eyes twitch, fighting to stay closed. Your ears feel as if they are reaching out, grabbing onto even the softest of sounds from the room: the ticking of the clock on the wall, the scrape of your clothing against the chair as you breathe. She begins to count down.
          </p>
        </Col>
      </Row>
    </div>

  {/* 5 */}
  <div>
      <Row>
        <Col xs="1">
          <p className="guide">
            "5"
          </p>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <p>
            You breathe in deeply, trying to feel the air as it fills your lungs and lifts your chest.
          </p>
        </Col>
      </Row>
    </div>

  {/* 4 */}
    <div>
      <Row>
        <Col xs="1 offset-sm-1">
          <p className="guide">
            "4"
          </p>
        </Col>
      </Row>
      <Row>
        <Col md="11 offset-md-1">
          <p className="four-text">
            You become aware of your clenched fists as your nail digs deeper into your skin.
          </p>
        </Col>
      </Row>
    </div>

  {/* 3 */}
    <div>
      <Row>
        <Col xs="1 offset-sm-2">
          <p className="guide">
            "3"
          </p>
        </Col>
      </Row>  
      <Row>
        <Col md="9 offset-md-2">
          <p>
            You try calm anxious thoughts from your mind, but they linger like perfume in the air.
            Grogginess descends and begins to weigh you down. 
          </p>
        </Col>
      </Row>
    </div>

  {/* 2 */}
    <div>
      <Row>
        <Col xs="1 offset-sm-3">
          <p className="guide">
            "2"
          </p>
        </Col>
      </Row>
      <Row>
        <Col md="8 offset-md-3">
          <p>
            You feel caught in the limbo between sleep and wakefulness. Her voice has sweetened and is drawing you into the dark. 
          </p>
        </Col>
      </Row>
    </div>

  {/* 1 */}
    <div>
      <Row>
        <Col xs="1 offset-sm-4">
          <p className="guide">
            "1"
          </p>
        </Col>
      </Row>
      <Row>
        <Col md="7 offset-md-4">
          <p>
            The darkness deepens. You let everything go and sink down into it.
          </p>
        </Col>
      </Row>
    </div>
  </div>

{/* Open */}
  <div>
    <Row className="justify-content-center">.-..</Row>
    <Row className="justify-content-center">..</Row>
    <Row className="justify-content-center">..-.</Row>
    <Row className="justify-content-center">-</Row>
    <Row className="justify-content-center">OPEN</Row>
  </div>
  <Row className="justify-content-end">
  <VisibilityOutlinedIcon />
  </Row>
  </Container>
  )
  }
}
    
export default ReactTimeout(Timeout)