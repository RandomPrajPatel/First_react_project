import TabButton from "./TabButton/TabButton";
import Section from "../Section";

export default function Examples({ selectedTopic, handleSelect }) {
    return (
        <Section id="examples" title="Examples">
            <menu>
                <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleSelect("components")}> Components </TabButton>

                <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")}> JSX </TabButton>

                <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleSelect("props")} > Props </TabButton>

                <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleSelect("state")} > State </TabButton>
            </menu>
        </Section>
    );
}