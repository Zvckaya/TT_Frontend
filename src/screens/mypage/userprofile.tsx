import styled from "styled-components";

const UserProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const UserProfileMainContainer = styled.div`
  width: 100%;
  display: flex;
`;

const UserProfileMainProfileContainer = styled.div`
  flex: 1;
`;

const UserProfileMainIntroduceContainer = styled.div`
  flex: 1;
`;

const UserProfileMainLevelContainer = styled.div`
  flex: 1;
`;

const UserProfileSubContainer = styled.div`
  display: flex;
  flex: 1;
`;

const UserProfileStudyContainer = styled.div`
  flex: 1;
`;

const UserProfileWritePostContainer = styled.div`
  flex: 1;
`;

const UserProfile = () => {
  return (
    <>
      <UserProfileWrapper>
        <UserProfileMainContainer>
          <UserProfileMainProfileContainer>1</UserProfileMainProfileContainer>
          <UserProfileMainIntroduceContainer>
            2
          </UserProfileMainIntroduceContainer>
          <UserProfileMainLevelContainer>3</UserProfileMainLevelContainer>
        </UserProfileMainContainer>

        <UserProfileSubContainer>
          <UserProfileStudyContainer>4</UserProfileStudyContainer>
          <UserProfileWritePostContainer>5</UserProfileWritePostContainer>
        </UserProfileSubContainer>
      </UserProfileWrapper>
    </>
  );
};

export default UserProfile;
