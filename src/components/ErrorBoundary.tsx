import { Component, type ReactNode } from 'react'

interface Props { fallback: ReactNode; children: ReactNode }

/** Keeps a failing optional feature (e.g. WebGL) from taking down the page. */
export default class ErrorBoundary extends Component<Props, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children
  }
}
