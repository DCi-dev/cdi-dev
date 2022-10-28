import skills from "@content/skillsData";

export function getPinnedSkills() {
  return skills.filter((skill) => skill.pinned);
}

