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
  constructor(props) {
    super(props);

    let languageSkills = skillList.filter(skill => skill.type === SKILL_TYPES.LANGUAGE).sort((a, b) => b.experience - a.experience);
    languageSkills[0].selected = true;

    this.state = {
      languageSkills: languageSkills,
      frameworkSkills: skillList.filter(skill => skill.type === SKILL_TYPES.FRAMEWORK).sort((a, b) => b.experience - a.experience),
      openTab: SKILL_TYPES.LANGUAGE,
      selectedIndex: 0
    };
    
    this.selectTab = this.selectTab.bind(this);
    this.formatSkillList = this.formatSkillList.bind(this);
    this.selectSkill = this.selectSkill.bind(this);
    this.scrollSelectedSkill = this.scrollSelectedSkill.bind(this);
  }

  render() {
    const openSkills = this.state.openTab === SKILL_TYPES.LANGUAGE ? this.state.languageSkills : this.state.frameworkSkills;
    const displayedSkills = this.formatSkillList(openSkills);

    const languagesTab  = <SkillTab open={ this.state.openTab === SKILL_TYPES.LANGUAGE  } clickHandler={ () => {this.selectTab(SKILL_TYPES.LANGUAGE); } } label="Languages"  />;
    const frameworksTab = <SkillTab open={ this.state.openTab === SKILL_TYPES.FRAMEWORK } clickHandler={ () => {this.selectTab(SKILL_TYPES.FRAMEWORK);} } label="Frameworks" />;

    const skillDetails = openSkills.filter(skill => skill.selected).map(skill => <div key={ uniqueId() }><p>{skill.description}</p>{skill.sample}</div>);

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
    let currentSkillList = selectedTab === SKILL_TYPES.LANGUAGE ? this.state.frameworkSkills : this.state.languageSkills;
    let nextSkillList = selectedTab === SKILL_TYPES.LANGUAGE ? [...this.state.languageSkills] : [...this.state.frameworkSkills];
    let newState = {
      openTab: selectedTab,
      selectedIndex: 0
    };

    currentSkillList = currentSkillList.map(skill => {
      let newSkill = {...skill};
        newSkill.selected = false;
        return newSkill;
    });

    nextSkillList[0].selected = true;

    if (selectedTab === SKILL_TYPES.LANGUAGE) {
      newState.frameworkSkills = currentSkillList;
      newState.languageSkills = nextSkillList;
    } else {
      newState.languageSkills = currentSkillList;
      newState.frameworkSkills = nextSkillList;
    }

    clearInterval(this.state.skillInterval);
    newState.skillInterval = setInterval(this.scrollSelectedSkill, 2000);

    this.setState(newState);
  }

  /**
   * Produce an array of SkillRow jsx elements for skills in the local state
   * that are of the indicated skill type sorted in decending order by
   * experience
   */
  formatSkillList(skills) {
    return skills.map(skill => {
      return <SkillRow key={ uniqueId() } label={ skill.name } rating={ skill.experience } clickHandler={ ()=>{ this.selectSkill(skill.name); } } selected={skill.selected} />;
    });
  }

  /**
   * Mark any currently selected skill as not selected, and mark the named skill
   * as selected.
   * 
   * @param {string} name the name of the skill
   */
  selectSkill(name) {
    let selectedList = this.state.openTab === SKILL_TYPES.LANGUAGE ? this.state.languageSkills : this.state.frameworkSkills;
    let newState = {
      selectedIndex: -1
    };

    selectedList = selectedList.map(skill => {
      let newSkill = {...skill};
        newSkill.selected = newSkill.name === name;
        return newSkill;
    });

    if (this.state.openTab === SKILL_TYPES.LANGUAGE) {
      newState.languageSkills = selectedList;
    } else {
      newState.frameworkSkills = selectedList;
    }

    clearInterval(this.state.skillTimeout);

    this.setState(newState);
  }

  scrollSelectedSkill() {
    if (this.state.selectedIndex < 0) {
      return;
    }

    let openSkills = this.state.openTab === SKILL_TYPES.LANGUAGE ? [...this.state.languageSkills] : [...this.state.frameworkSkills];
    const nextIndex = this.state.selectedIndex === openSkills.length - 1 ? 0 : this.state.selectedIndex + 1;

    openSkills[this.state.selectedIndex].selected = false;
    openSkills[nextIndex].selected = true;

    let nextState = {
      selectedIndex: nextIndex
    };

    if (this.state.openTab === SKILL_TYPES.LANGUAGE) {
      nextState.languageSkills = openSkills;
    } else {
      nextState.frameworkSkills = openSkills;
    }

    this.setState(nextState);
  }

  componentDidMount() {
    this.setState({
      skillInterval: setInterval(this.scrollSelectedSkill, 2000)
    });
  }

  componentWillUnmount() {
    let currentSkillList = this.state.openTab === SKILL_TYPES.LANGUAGE ? this.state.frameworkSkills : this.state.languageSkills;
    let nextState = {};
    currentSkillList = currentSkillList.map(skill => {
      let newSkill = {...skill};
        newSkill.selected = false;
        return newSkill;
    });

    clearInterval(this.state.skillInterval);
  }
}

export default SkillViewer;