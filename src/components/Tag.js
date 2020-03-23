import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import { canDrag, canDrop } from './utils';
import RemoveComponent from './RemoveComponent';

const ItemTypes = { TAG: 'tag' };

const Tag = ({
  readOnly,
  tag,
  classNames,
  labelField,
  onTagClicked,
  removeComponent,
  onDelete,
  moveTag,
  allowDragDrop,
  index,
}) => {
  const label = tag[labelField];
  const { className = '' } = tag;
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.TAG,
      id: tag.id,
      index
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    }),
    canDrag: () => canDrag({ moveTag, readOnly, allowDragDrop })
  });

  const [, drop] = useDrop({
    accept: ItemTypes.TAG,
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientX = clientOffset.x - hoverBoundingRect.left;

      // Only perform the move when the mouse has crossed half of the items width
      if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
        return;
      }

      moveTag(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
    // eslint-disable-next-line no-unused-vars
    canDrop: props => {
      canDrop(props);
    }
  });

  drag(drop(ref));

  return (
    <span
      ref={ref}
      className={ClassNames('tag-wrapper', classNames.tag, className)}
      style={{
        opacity: isDragging ? 0 : 1,
        cursor: canDrag({ moveTag, readOnly, allowDragDrop }) ? 'move' : 'auto'
      }}
      onClick={onTagClicked}
      onKeyDown={onTagClicked}
      onTouchStart={onTagClicked}
    >
      {label}
      <RemoveComponent
        tag={tag}
        className={classNames.remove}
        removeComponent={removeComponent}
        onClick={onDelete}
        readOnly={readOnly}
      />
    </span>
  );
};

Tag.propTypes = {
  index: PropTypes.number.isRequired,
  labelField: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
  tag: PropTypes.shape({
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
  }),
  moveTag: PropTypes.func,
  removeComponent: PropTypes.func,
  onTagClicked: PropTypes.func,
  classNames: PropTypes.object,
  readOnly: PropTypes.bool,
  allowDragDrop: PropTypes.bool.isRequired
};

Tag.defaultProps = {
  labelField: 'text',
  readOnly: false
};

export default Tag;
