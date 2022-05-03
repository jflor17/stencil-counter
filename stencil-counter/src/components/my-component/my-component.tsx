/* @jsx h */
import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: true,
})
export class MyCounter {
  @Prop() count: number = 0;

  inc() {
    this.count++;
  }

  dec() {
    this.count--;
  }

  render() {
    return (
      <Host>
        <button onClick={this.dec.bind(this)}>-</button>
        <span>{this.count}</span>
        <button onClick={this.inc.bind(this)}>+</button>
      </Host>
    );
  }
}
