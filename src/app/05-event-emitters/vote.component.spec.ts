import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChanged event when upvoted', () => {
    let totalV = null;
    component.voteChanged.subscribe(tv => totalV = tv);
    component.upVote();
    expect(totalV).toBe(1);
  });
});