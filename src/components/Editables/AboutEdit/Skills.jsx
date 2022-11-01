import { TagsInput } from "react-tag-input-component";

const Skills = ({ tags, setTags }) => {
  
  return (
      <TagsInput
        value={tags}
        onChange={setTags}
        name="Programming"
        placeHolder="Əlavə et"
      />
  );
};

export default Skills;
