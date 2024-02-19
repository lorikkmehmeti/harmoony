import { withCustomClasses } from "@/lib/helpers/hocs/icon-hoc.tsx";
import {
	AppVersionIcon,
	ArchiveIcon,
	BracketIcon,
	CalendarIcon,
	CalendarTimeOff,
	Camera,
	CommunityIcon,
	DocumentIcon,
	EnergyIcon,
	Flow,
	GroupIcon,
	HelpIcon,
	HomeIcon,
	InboxIcon,
	InviteUser,
	IssueIcon,
	ListIcon,
	Notes,
	NotificationIcon,
	OrganizationalIcon,
	ProjectIcon,
	Record,
	Reports,
	Tasks,
	TeamCloud,
	TimesheetIcon,
	Trash,
	UserIcon,
} from "@/pages/authenticated/components/sidebar/icons/icons.tsx";

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
const CalendarIconWithClasses = withCustomClasses(CalendarIcon, className);
const CalendarTimeOffIconWithClasses = withCustomClasses(
	CalendarTimeOff,
	className,
);
const CommunityIconWithClasses = withCustomClasses(CommunityIcon, className);
const GroupIconWithClasses = withCustomClasses(GroupIcon, className);
const OrganizationalIconWithClasses = withCustomClasses(
	OrganizationalIcon,
	className,
);
export {
	AppVersionIconWithClasses as AppVersionIcon,
	ArchiveIconWithClasses as ArchiveIcon,
	BracketIconWithClasses as BracketIcon,
	CalendarIconWithClasses as CalendarIcon,
	CalendarTimeOffIconWithClasses as CalendarTimeOffIcon,
	CameraIconWithClasses as CameraIcon,
	CommunityIconWithClasses as CommunityIcon,
	DocumentIconWithClasses as DocumentIcon,
	EnergyIconWithClasses as EnergyIcon,
	FlowIconWithClasses as FlowIcon,
	GroupIconWithClasses as GroupIcon,
	HelpIconWithClasses as HelpIcon,
	HomeIconWithClasses as HomeIcon,
	InboxIconWithClasses as InboxIcon,
	InviteUserWithClasses as InviteUser,
	IssueIconWithClasses as IssueIcon,
	ListIconWithClasses as ListIcon,
	NotesIconWithClasses as NotesIcon,
	NotificationIconWithClasses as NotificationIcon,
	OrganizationalIconWithClasses as OrganizationalIcon,
	ProjectIconWithClasses as ProjectIcon,
	RecordIconWithClasses as RecordIcon,
	ReportsIconWithClasses as ReportsIcon,
	TasksIconWithClasses as TasksIcon,
	TeamCloudIconWithClasses as TeamCloudIcon,
	TimesheetIconWithClasses as TimesheetIcon,
	TrashIconWithClasses as TrashIcon,
	UserIconWithClasses as UserIcon,
};
