import CheckedInPlayersList from "../Components/TeamDefinitionScreen/CheckedInPlayersList";
import MixTeam from "../Components/TeamDefinitionScreen/MixTeam";
import TeamDefinitionContentContainer from "../Components/TeamDefinitionScreen/TeamDefinitionContentContainer";
import TeamDefinitionScreenContainer from "../Components/TeamDefinitionScreen/TeamDefinitionScreenContainer";
import TeamsContainer from "../Components/TeamDefinitionScreen/TeamsContainer";


function TeamDefinitionScreen() {

  return (
    <TeamDefinitionScreenContainer> {/*flex box row */}
      <TeamDefinitionContentContainer>
        <CheckedInPlayersList event='1'/> {/*grid container*/}
          <TeamsContainer>
          <MixTeam></MixTeam>
          <MixTeam></MixTeam>
          <MixTeam></MixTeam>
          <MixTeam></MixTeam>
          </TeamsContainer>
      </TeamDefinitionContentContainer>
    </TeamDefinitionScreenContainer>
  )
}

export default TeamDefinitionScreen;
