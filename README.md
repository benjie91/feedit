# Feedit
Feedit provides a platform for developers to send feedback of their system to it. It will then
consolidates all the feedback and present the data through a dashboard. Before the feedback can
be sent over to feedit, the system has to be first registered with feedit. 

## Usage
You will be introduced to the following page.
![](images/1%20First%20view.png)
When you click on “System Registration” at the left, you will be brought to this page.
![](images/2%20System%20Registration.png)
When you click on “Dashboard” at the left, you will be brought to this page.
![](images/3%20Dashboard%20Default.png)
At the Dashboard page, the components are draggable and resizable. Make sure the switch labelled “Dynamic” at the top right is set to On (which is the default).

To drag components, right click and hold a component and drag it. The component will have a red background when it is selected. Like the below example.
![](images/4%20Dashboard%20RGL.png)
To resize components, right click on the selector at the bottom right of each component.
The selector is circled in red below.
![](images/5%20Dashboard%20Filter.png)
If you want to reset the layout to the original position, click the “Reset Layout” button. As local storage is being used, closing the tab and reopening it will not reset the layout to the original position.
![](images/6%20data%20grid%20filter.png)
If you would like to take advantage of the additional features of ag-Grid offers, switch the switch labelled “Dynamic” to Off. 

This additional features using the filters in ag-Grid, being able to remove a column by right clicking on the column and dragging it above the grid, resizing the columns and moving the sequence of the columns by dragging a column to another position.

There are still some features that will be active whether or not the switch labelled “Dynamic” is off. This features include being able to scroll through the data grid and being able to arrange the data based on their sequence.
![](images/7%20Draggable.png)
![](images/8%20Dashboard%20RGL%20resizable.png)
![](images/9%20Dashboard%20Reset%20Layout.png)
![](images/10%20data%20grid%20sequence.png)
When hovering across the data points for both the bar chart and line chart, there will be toast that will provide more details about that particular data point.
![](images/11%20Chart%20hover.png)


## System Interface to Feedit
Post Request - http://server-name:17012/feedback/create
```json
{
  "systemId": "App01",
  "timestamp": "08/09/2019 15:22",
  "userId": "12345",
  "userGroup": "Department A",
  "feedback": "The system is not easy to use.",
  "feedbackTarget": "Generic"
}
```

## Tech Stack
Feedit is powered by Spring Boot for the backend server. The dashboard is built using React library.
