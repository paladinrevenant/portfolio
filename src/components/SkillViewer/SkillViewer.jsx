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
    const displayedSkills = this.formatSkillList(this.state.openTab);

    const languagesTab  = <SkillTab open={ this.state.openTab === SKILL_TYPES.LANGUAGE  } clickHandler={ () => {this.selectTab(SKILL_TYPES.LANGUAGE); } } label="Languages"  />;
    const frameworksTab = <SkillTab open={ this.state.openTab === SKILL_TYPES.FRAMEWORK } clickHandler={ () => {this.selectTab(SKILL_TYPES.FRAMEWORK);} } label="Frameworks" />;

    const skillDetails = this.state.skills.filter(skill => skill.selected).map(skill => <div key={ uniqueId() }><p>{skill.description}</p>{skill.sample}</div>);

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
    this.selectSkill(null);
  }

  /**
   * Produce an array of SkillRow jsx elements for skills in the local state
   * that are of the indicated skill type sorted in decending order by
   * experience
   * 
   * @param {string} type The skill type to display
   */
  formatSkillList(type) {
    if (validateConstant(SKILL_TYPES, type)) { // Make sure that the requested type is valid
      return this.state.skills.filter(skill => skill.type === type) // Filter by type
      .sort((a, b) => b.experience - a.experience) // Sort in decending order by experience
      .map(skill => {
        return <SkillRow key={ uniqueId() } label={ skill.name } rating={ skill.experience } clickHandler={ ()=>{ this.selectSkill(skill.name); } } selected={skill.selected} />;
      });
    }

    return null; // If the type is not valid, return null
  }

  /**
   * Mark any currently selected skill as not selected, and mark the named skill
   * as selected.
   * 
   * @param {string} name the name of the skill
   */
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