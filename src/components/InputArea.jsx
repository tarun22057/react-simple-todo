// import React, { useState } from "react";

// function InputArea(props) {
//   const [inputText, setInputText] = useState("");

//   function handleChange(event) {
//     const newValue = event.target.value;
//     setInputText(newValue);
//   }
//   return (
//     <div className="form">
//       <input onChange={handleChange} type="text" value={inputText} />
//       <button
//         onClick={() => {
//           props.addItem(inputText);
//           setInputText("");
//         }}
//       >
//         <span>Add</span>
//       </button>
//     </div>
//   );
// }

// export default InputArea;
import React, { useState } from "react";
import Autosuggest from "react-autosuggest";

function InputArea(props) {
  const [inputText, setInputText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Dummy list of suggestions
  const allItems = [
    "Complete Project A",
    "Prepare presentation for meeting",
    "Write weekly report",
    "Review and respond to emails",
    "Attend team meeting",
    "Call client for follow-up",
    "Submit expense report",
    "Update documentation",
    "Research new technologies",
    "Schedule team-building activity",
    "Organize files and folders",
    "Review and prioritize tasks",
    "Send out meeting agenda",
    "Create project timeline",
    "Participate in training session",
    "Implement new feature",
    "Test software functionality",
    "Brainstorm ideas for marketing campaign",
    "Attend conference or workshop",
    "Arrange project kickoff meeting",
    "Create to-do list for the day",
    "Provide feedback on colleague's work",
    "Evaluate project progress",
    "Set up virtual meeting",
    "Complete online training modules",
    "Create and update project tasks",
    "Check server status and logs",
    "Prepare monthly budget report",
    "Generate invoice for clients",
    "Plan team-building event",
    "Collaborate with cross-functional teams",
    "Draft agenda for team meeting",
    "Review and update project documentation",
    "Follow up on action items from previous meetings",
    "Coordinate with external vendors",
    "Schedule project review session",
    "Conduct user testing",
    "Evaluate project risks and mitigation strategies",
    "Update project status on project management tool",
    "Organize team lunch or social event",
    "Write and submit research paper",
    "Implement design changes",
    "Create marketing materials",
    "Send out project update to stakeholders",
    "Review and approve code changes",
    "Prepare for performance review",
    "Develop and deliver training sessions",
    "Set personal development goals",
    "Perform system backups",
    "Plan team offsite retreat",
    "Write and edit blog posts",
    "Update social media accounts",
    "Evaluate team performance",
    "Create user documentation",
    "Prepare for client meeting",
    "Update software licenses",
    "Submit timesheet for approval",
    "Plan and execute product launch",
    "Conduct code reviews",
    "Prepare for team presentation",
    "Collaborate with marketing team",
    "Respond to customer inquiries",
    "Review and implement feedback",
    "Plan and execute QA testing",
    "Coordinate with HR for hiring process",
    "Create and share project roadmap",
    "Implement security updates",
    "Set up project milestones",
    "Update project Gantt chart",
    "Participate in team-building exercises",
    "Plan and execute product demo",
    "Review and update project budget",
    "Evaluate and select software tools",
    "Collaborate with UX/UI designers",
    "Organize team-building workshops",
    "Implement data analysis techniques",
    "Review and optimize workflows",
    "Prepare and deliver client presentation",
    "Collaborate with sales team",
    "Create and maintain project wiki",
    "Participate in industry conferences",
    "Provide mentorship to team members",
    "Update company website",
    "Organize and lead team retrospectives",
    "Implement continuous integration",
    "Conduct peer code reviews",
    "Plan and execute customer feedback sessions",
    "Collaborate with customer support",
    "Prepare and deliver internal training sessions",
    "Review and enhance product documentation",
    "Evaluate and implement project management methodologies",
    "Create and maintain product roadmaps",
    "Participate in hackathons or coding competitions",
    "Collaborate with legal team for contract reviews",
    "Conduct market research",
    "Create and maintain knowledge base",
    "Participate in community outreach programs",
    "Implement and optimize DevOps practices",
    "Conduct usability testing",
    "Plan and execute company-wide events",
    "Participate in cross-functional teams",
    "Review and optimize server infrastructure",
    "Prepare and deliver technical presentations",
    "Collaborate with finance department",
    "Implement and document coding standards",
    "Conduct risk assessments",
    "Plan and execute release management",
    "Collaborate with product managers",
    "Review and optimize database performance",
    "Prepare and deliver client training sessions",
    "Collaborate with graphic designers",
    "Implement and maintain version control systems",
    "Conduct customer satisfaction surveys",
    "Plan and execute data migration projects",
    "Collaborate with business analysts",
    "Review and optimize network infrastructure",
    "Prepare and deliver public speaking engagements",
    "Implement and optimize caching strategies",
    "Conduct employee engagement activities",
    "Plan and execute software deployment",
    "Collaborate with quality assurance teams",
    "Review and optimize application performance",
    "Prepare and deliver workshops and tutorials",
    "Implement and optimize security protocols",
    "Conduct team-building activities",
    "Plan and execute data backup procedures",
    "Collaborate with system administrators",
    "Review and optimize cloud infrastructure",
    "Prepare and deliver leadership training sessions",
    "Implement and optimize load balancing",
    "Conduct diversity and inclusion initiatives",
    "Plan and execute disaster recovery drills",
    "Collaborate with technical writers",
    "Review and optimize serverless architecture",
    "Prepare and deliver coding bootcamps",
    "Implement and optimize containerization",
    "Conduct wellness programs",
    "Plan and execute cybersecurity measures",
    "Collaborate with automation testing teams",
    "Review and optimize microservices architecture",
    "Prepare and deliver technology webinars",
    "Implement and optimize API integrations",
    "Conduct innovation workshops",
    "Plan and execute accessibility testing",
    "Collaborate with machine learning engineers",
    "Review and optimize IoT infrastructure",
    "Prepare and deliver industry expert talks",
    "Implement and optimize continuous deployment",
    "Conduct mentoring programs",
    "Plan and execute performance testing",
    "Collaborate with blockchain developers",
    "Review and optimize edge computing",
    "Prepare and deliver agile coaching sessions",
    "Implement and optimize server clusters",
    "Conduct coding challenges",
    "Plan and execute compliance audits",
    "Collaborate with virtual reality developers",
    "Review and optimize quantum computing",
    "Prepare and deliver tech talks",
    "Implement and optimize data pipelines",
    "Conduct mindfulness and well-being sessions",
    "Plan and execute ethical hacking exercises",
    "Collaborate with augmented reality developers",
    "Review and optimize 5G infrastructure",
    "Prepare and deliver AI and machine learning tutorials",
    "Implement and optimize blockchain networks",
    "Conduct coding bootcamps",
    "Plan and execute sustainability initiatives",
    "Collaborate with robotics engineers",
    "Review and optimize edge computing",
    "Prepare and deliver cloud computing workshops",
    "Implement and optimize biometric security",
    "Conduct open-source contribution programs",
    "Plan and execute smart city projects",
    "Collaborate with nanotechnology researchers",
    "Review and optimize quantum computing",
    "Prepare and deliver cybersecurity workshops",
    "Implement and optimize space technology",
    "Conduct hackathons",
    "Plan and execute renewable energy projects",
    "Collaborate with aerospace engineers",
    "Review and optimize biotechnology",
    "Prepare and deliver innovation bootcamps",
    "Implement and optimize virtual reality experiences",
    "Conduct tech meetups",
    "Plan and execute environmental conservation projects",
    "Collaborate with bioinformatics researchers",
    "Review and optimize autonomous vehicles",
    "Prepare and deliver technology summits",
    "Implement and optimize telemedicine solutions",
    "Conduct coding competitions",
    "Plan and execute social impact projects",
    "Collaborate with marine biologists",
    "Review and optimize space exploration",
    "Prepare and deliver technology expos",
    "Implement and optimize renewable energy sources",
    "Conduct coding workshops",
    "Plan and execute community development projects",
    "Collaborate with urban planners",
    "Review and optimize sustainable agriculture",
    "Prepare and deliver technology conferences",
    "Implement and optimize smart city solutions",
    "Conduct coding camps",
    "Plan and execute humanitarian aid projects",
    "Collaborate with environmental scientists",
    "Review and optimize clean energy solutions",
    "Prepare and deliver technology seminars",
    "Implement and optimize assistive technologies",
    "Conduct coding events",
    "Plan and execute educational outreach programs",
    "Collaborate with social entrepreneurs",
    "Review and optimize sustainable transportation",
    "Prepare and deliver technology webinars",
    "Implement and optimize telecommunication networks",
    "Conduct coding meetups",
    "Plan and execute global development projects",
    "Collaborate with nonprofit organizations",
    "Review and optimize eco-friendly technologies",
  ];

  // Autosuggest input properties
  const inputProps = {
    placeholder: "Type an item",
    value: inputText,
    onChange: (event, { newValue }) => setInputText(newValue),
  };

  // Function to get suggestions based on input value
  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : allItems.filter(
          (item) => item.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  // Autosuggest onSuggestionsFetchRequested method
  const onSuggestionsFetchRequested = ({ value }) =>
    setSuggestions(getSuggestions(value));

  // Autosuggest onSuggestionsClearRequested method
  const onSuggestionsClearRequested = () => setSuggestions([]);

  // Autosuggest render suggestion method
  const renderSuggestion = (suggestion) => <div>{suggestion}</div>;

  return (
    <div className="form">
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={(suggestion) => suggestion}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
      <button
        onClick={() => {
          props.addItem(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
