package com.starlight.chameleonims.DTOS;

import java.util.List;

import com.starlight.chameleonims.Costume;
import com.starlight.chameleonims.Prop;
import com.starlight.chameleonims.Tool;

public class StockDisplay {

    private List<Costume> costumes;

    private List<Prop> props;

    private List<Tool> tools;

    public StockDisplay () {}

    public StockDisplay(List<Costume> costumes, List<Prop> props, List<Tool> tools) {
        this.costumes = costumes;
        this.props = props;
        this.tools = tools;
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

    public List<Tool> getTools() { 
        return tools; 
    }

    public void setTools(List<Tool> tools) { 
        this.tools = tools; 
    }

}