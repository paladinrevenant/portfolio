import React            from "react";
import skillList        from "Assets/skills";
import SkillRow         from "Components/SkillRow/SkillRow";
import SkillTab         from "Components/SkillTab/SkillTab";
import validateConstant from "Helpers/validateConstant";
import { uniqueId }     from "lodash";
import { SKILL_TYPES }  from "Source/constants";
import classes          from "./SkillViewer.less";

/**
 * Displays information about technical skills, experience, and level of competency
 */
class SkillViewer extends React.Component {
  state = {
    skills: [...skillList],
    openTab: SKILL_TYPES.LANGUAGE
  }

  constructor(props) {
    super(props);
    
    this.selectTab = this.selectTab.bind(this);
    this.formatSkillList = this.formatSkillList.bind(this);
    this.selectSkill = this.selectSkill.bind(this);
  }

  render() {
    const languageSkills = this.formatSkillList(SKILL_TYPES.LANGUAGE);

    const frameworkSkills = this.formatSkillList(SKILL_TYPES.FRAMEWORK);

    const displayedSkills = this.state.openTab === SKILL_TYPES.LANGUAGE  ? languageSkills  :
                            this.state.openTab === SKILL_TYPES.FRAMEWORK ? frameworkSkills :
                                                                           null;

    const languagesTab  = <SkillTab open={ this.state.openTab === SKILL_TYPES.LANGUAGE  } clickHandler={ () => {this.selectTab(SKILL_TYPES.LANGUAGE); } } label="Languages"  />;
    const frameworksTab = <SkillTab open={ this.state.openTab === SKILL_TYPES.FRAMEWORK } clickHandler={ () => {this.selectTab(SKILL_TYPES.FRAMEWORK);} } label="Frameworks" />;

    const skillDetails = this.state.skills.filter(skill => skill.selected).map(skill => <div key={ uniqueId() }>{skill.description}{skill.sample}</div>);

    return (
      <div className={ classes.SkillViewer }>
        <div className={ classes.tabBar }>
          { languagesTab }
          { frameworksTab }
        </div>
        <section className={ classes.list }>
          <div className={ classes.skillList }>
            { displayedSkills }
          </div>
        </section>
        <section className={ classes.detail }>
          {skillDetails}
        </section>
      </div>
    );
  }

  /**
   * Sets the currently open tab
   */
  selectTab(selectedTab) {
    this.setState({ openTab: selectedTab });
  }

  formatSkillList(type) {
    if (validateConstant(SKILL_TYPES, type)) {
      return this.state.skills.filter(skill => skill.type === type).map(skill => {
        return <SkillRow key={ uniqueId() } label={ skill.name } rating={ skill.experience } clickHandler={ ()=>{ this.selectSkill(skill.name); } } selected={skill.selected} />;
      });
    }

    return null;
  }

  selectSkill(name) {
    this.setState(state => {
      let skills = state.skills.map(skill => {
        let newSkill = {...skill};
        newSkill.selected = newSkill.name === name;
        return newSkill;
      });

      return {
        skills: skills
      };
    });
  }
}

export default SkillViewer;