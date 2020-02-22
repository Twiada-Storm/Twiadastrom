import React,{ Component }  from "react";
import {Navbar, ButtonToolbar, Button, Toast, Form} from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";


export function Searchbar({Forms}) {
    return(
        <Navbar className="bg-light justify-content-between">
            <Form inline>
                <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                <Button type="submit">Submit</Button>
            </Form>
        </Navbar>
    )

}
