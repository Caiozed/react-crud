import React, { Component } from "react";

import {
  Collapsible,
  CollapsibleItem,
  Row,
  Col,
  Button,
  Icon,
  Badge
} from "react-materialize";

class CrudList extends Component {
  state = { items: [{ content: "Teste", header: "testwe" }] };

  addItem = (e, item) => {
    e.preventDefault();
    let { items } = this.state;
    items.push(item);
    console.log(items);
    this.setState({ items: items });
  };

  updateItem(e, x, i) {
    const { items } = this.state;
    items[i][x] = e.target.value;
    this.setState({ items: items });
  }

  deleteItem = i => {
    const { items } = this.state;
    items.splice(i, 1);
    this.setState({ items: items });
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <Row>
          <Col offset={"m3"} s={6} m={6}>
            <form
              onSubmit={e => {
                this.addItem(e, {
                  content: this.itemNode.value,
                  header: this.itemNode.value
                });
              }}
            >
              <input ref={node => (this.itemNode = node)} />
            </form>
            <Collapsible>
              {items.map((x, i) => {
                return (
                  <CollapsibleItem
                    key={i}
                    header={
                      <input
                        style={{ width: "80%" }}
                        value={x.header}
                        onChange={e => {
                          this.updateItem(e, "header", i);
                        }}
                      />
                    }
                    icon="filter_drama"
                  >
                    <Badge>
                      <Button
                        onClick={() => {
                          this.deleteItem(i);
                        }}
                        floating
                        icon="delete"
                        className="red"
                      />
                    </Badge>
                    <textarea
                      onChange={e => {
                        this.updateItem(e, "content", i);
                      }}
                      className="materialize-textarea"
                      value={x.content}
                    />
                  </CollapsibleItem>
                );
              })}
            </Collapsible>;
          </Col>
        </Row>
      </div>
    );
  }
}

export default CrudList;
