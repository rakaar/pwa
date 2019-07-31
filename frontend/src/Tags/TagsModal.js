import React from 'react';
import { Modal, Chip } from 'react-materialize';

const ArticleTags = [
  'tag1',
  'tag1',
  'tag1',
  'tag1',
  'tag1',
  'tag1',
  'tag1',
  'tag1',
  'tag1',
  'tag1',
  'tag1',
  'tag1'
];

export default function TagsModal() {
  return (
    <div>
      <Modal
        trigger={<h5>Tags</h5>}
        children={
          <div>
            <h4>Tags</h4>
            {ArticleTags.map(item => (
              <Chip style={{ size: 25 }} close>
                {item}
              </Chip>
            ))}
          </div>
        }
      />
    </div>
  );
}
