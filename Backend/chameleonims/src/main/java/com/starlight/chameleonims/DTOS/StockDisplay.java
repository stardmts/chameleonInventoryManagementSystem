package com.starlight.chameleonims.DTOS;

import java.util.List;

import com.starlight.chameleonims.Costume;
import com.starlight.chameleonims.Prop;

public class StockDisplay {

    private List<Costume> costumes;

    private List<Prop> props;

    public StockDisplay () {}

    public StockDisplay(List<Costume> costumes, List<Prop> props) {
        this.costumes = costumes;
        this.props = props;
    }

    public List<Costume> getCostumes() { 
        return costumes; 
    }

    public void setCostumes(List<Costume> costumes) {
        this.costumes = costumes; 
    }

    public List<Prop> getProps() { 
        return props; 
    }

    public void setProps(List<Prop> props) { 
        this.props = props; 
    }

}