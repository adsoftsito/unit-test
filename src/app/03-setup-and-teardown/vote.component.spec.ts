import { VoteComponent } from './vote.component'; 
import { exec } from 'child_process';

describe('VoteComponent', () => {
  let component : VoteComponent;
  
  beforeEach(() => {
    // arrange
    component = new VoteComponent();
   });

  it('should increment totalVotes when upvoted', () => {
    // act
    component.upVote();
  
    // assert
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvoted', () => {
    
    // act
    component.downVote();
  
    // assert
    expect(component.totalVotes).toBe(-1);
  });
  
});