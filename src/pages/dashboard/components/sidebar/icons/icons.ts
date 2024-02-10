import { withCustomClasses } from "@/lib/helpers/hocs/icon-hoc.tsx";
import {
	AppVersionIcon,
	ArchiveIcon,
	BracketIcon,
	Camera,
	DocumentIcon,
	EnergyIcon,
	Flow,
	HelpIcon,
	HomeIcon,
	InboxIcon,
	InviteUser,
	IssueIcon,
	ListIcon,
	Notes,
	NotificationIcon,
	ProjectIcon,
	Record,
	Reports,
	Tasks,
	TeamCloud,
	TimesheetIcon,
	Trash,
	UserIcon,
} from "@/pages/dashboard/components/sidebar/icons/icons.tsx";

export const className: string =
	"w-[15px] h-[15px] self-center align-middle leading-none mr-1.5";

const HomeIconWithClasses = withCustomClasses(HomeIcon, className);
const UserIconWithClasses = withCustomClasses(UserIcon, className);
const IssueIconWithClasses = withCustomClasses(IssueIcon, className);
const BracketIconWithClasses = withCustomClasses(BracketIcon, className);
const ListIconWithClasses = withCustomClasses(ListIcon, className);
const ProjectIconWithClasses = withCustomClasses(ProjectIcon, className);
const EnergyIconWithClasses = withCustomClasses(EnergyIcon, className);
const ArchiveIconWithClasses = withCustomClasses(ArchiveIcon, className);
const InviteUserWithClasses = withCustomClasses(InviteUser, className);
const NotificationIconWithClasses = withCustomClasses(
	NotificationIcon,
	className,
);
const TasksIconWithClasses = withCustomClasses(Tasks, className);
const NotesIconWithClasses = withCustomClasses(Notes, className);
const ReportsIconWithClasses = withCustomClasses(Reports, className);
const FlowIconWithClasses = withCustomClasses(Flow, className);
const TeamCloudIconWithClasses = withCustomClasses(TeamCloud, className);
const RecordIconWithClasses = withCustomClasses(Record, className);
const CameraIconWithClasses = withCustomClasses(Camera, className);
const TrashIconWithClasses = withCustomClasses(Trash, className);
const DocumentIconWithClasses = withCustomClasses(DocumentIcon, className);
const TimesheetIconWithClasses = withCustomClasses(TimesheetIcon, className);
const InboxIconWithClasses = withCustomClasses(InboxIcon, className);
const HelpIconWithClasses = withCustomClasses(HelpIcon, className);
const AppVersionIconWithClasses = withCustomClasses(AppVersionIcon, className);

export {
	AppVersionIconWithClasses as AppVersionIcon,
	ArchiveIconWithClasses as ArchiveIcon,
	BracketIconWithClasses as BracketIcon,
	CameraIconWithClasses as CameraIcon,
	DocumentIconWithClasses as DocumentIcon,
	EnergyIconWithClasses as EnergyIcon,
	FlowIconWithClasses as FlowIcon,
	HelpIconWithClasses as HelpIcon,
	HomeIconWithClasses as HomeIcon,
	InboxIconWithClasses as InboxIcon,
	InviteUserWithClasses as InviteUser,
	IssueIconWithClasses as IssueIcon,
	ListIconWithClasses as ListIcon,
	NotesIconWithClasses as NotesIcon,
	NotificationIconWithClasses as NotificationIcon,
	ProjectIconWithClasses as ProjectIcon,
	RecordIconWithClasses as RecordIcon,
	ReportsIconWithClasses as ReportsIcon,
	TasksIconWithClasses as TasksIcon,
	TeamCloudIconWithClasses as TeamCloudIcon,
	TimesheetIconWithClasses as TimesheetIcon,
	TrashIconWithClasses as TrashIcon,
	UserIconWithClasses as UserIcon,
};
