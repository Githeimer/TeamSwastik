import React from "react";
import OrganizationInfo from "./organization/OrganizationInfo";

const OrgLanding = () => {
  return (
    <>
      <div className="container">
        <h1>Welcome to Organization Profile</h1>
        <OrganizationInfo></OrganizationInfo>
      </div>
    </>
  );
};

export default OrgLanding;
