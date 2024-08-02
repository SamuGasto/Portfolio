import DragLetter from "./drag-letter";

export default function Name() {
  return (
    <div className="flex flex-row gap-6">
      <div className="flex flex-row">
        <DragLetter letter="S" />
        <DragLetter letter="a" />
        <DragLetter letter="m" />
        <DragLetter letter="u" />
        <DragLetter letter="e" />
        <DragLetter letter="l" />
      </div>
      <div className="flex flex-row">
        <DragLetter letter="R" colorLetter="blue" />
        <DragLetter letter="a" colorLetter="blue" />
        <DragLetter letter="m" colorLetter="blue" />
        <DragLetter letter="í" colorLetter="blue" />
        <DragLetter letter="r" colorLetter="blue" />
        <DragLetter letter="e" colorLetter="blue" />
        <DragLetter letter="z" colorLetter="blue" />
      </div>
    </div>
  );
}
