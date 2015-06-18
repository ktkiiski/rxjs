import Scheduler from './Scheduler';
import {
	NextScheduledAction,
	ScheduledAction
} from './SchedulerActions';

export default class NextTickScheduler extends Scheduler {
  scheduleNow(state:any, work:Function):ScheduledAction {
    return this.scheduled ? new ScheduledAction(this, state, work) : new NextScheduledAction(this, state, work);
  }
}