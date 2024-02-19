import { SVGProps } from "react";

export function BracketIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M15 8C15.6501 8.06476 16.0876 8.21113 16.4142 8.54192C17 9.13523 17 10.0902 17 12C17 13.9098 17 14.8648 16.4142 15.4581C16.0876 15.7889 15.6501 15.9352 15 16M9 16C8.34994 15.9352 7.91238 15.7889 7.58579 15.4581C7 14.8648 7 13.9098 7 12C7 10.0902 7 9.13523 7.58579 8.54192C7.91238 8.21113 8.34994 8.06476 9 8"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export function ChevronRight(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="m9 6l6 6l-6 6"></path>
		</svg>
	);
}

export function ListIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="1.5"
				d="M3 13v-2c0-3.75 0-5.625.955-6.939A5 5 0 0 1 5.06 2.955C6.375 2 8.251 2 12 2c3.75 0 5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C21 5.375 21 7.251 21 11v2c0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 22 15.749 22 12 22c-3.75 0-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106c-.531-.731-.767-1.635-.871-2.939M7 9h10"></path>
		</svg>
	);
}

export function IssueIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}>
			<path
				fill="currentColor"
				d="M17.32 3.205a.75.75 0 0 1 1.046-.177a11.056 11.056 0 0 1 2.605 2.606a.75.75 0 1 1-1.222.869a9.554 9.554 0 0 0-2.252-2.252a.75.75 0 0 1-.177-1.046Zm3.475 14.115a.75.75 0 0 1 .176 1.046a11.07 11.07 0 0 1-2.605 2.605a.75.75 0 1 1-.869-1.222a9.554 9.554 0 0 0 2.252-2.252a.75.75 0 0 1 1.046-.177ZM2.018 9.543a.75.75 0 0 1 .615.864a9.571 9.571 0 0 0 0 3.186a.75.75 0 1 1-1.48.25a11.07 11.07 0 0 1 0-3.686a.75.75 0 0 1 .865-.614Zm7.525 12.439a.75.75 0 0 1 .864-.615a9.571 9.571 0 0 0 3.186 0a.75.75 0 1 1 .25 1.48a11.07 11.07 0 0 1-3.686 0a.75.75 0 0 1-.614-.865ZM6.68 3.205a.75.75 0 0 1-.177 1.046A9.558 9.558 0 0 0 4.25 6.503a.75.75 0 1 1-1.223-.87a11.056 11.056 0 0 1 2.606-2.605a.75.75 0 0 1 1.046.177ZM3.205 17.32a.75.75 0 0 1 1.046.177a9.554 9.554 0 0 0 2.252 2.252a.75.75 0 1 1-.87 1.223a11.056 11.056 0 0 1-2.605-2.606a.75.75 0 0 1 .177-1.046Zm6.952-16.166a11.07 11.07 0 0 1 3.686 0a.75.75 0 0 1-.25 1.479a9.571 9.571 0 0 0-3.186 0a.75.75 0 1 1-.25-1.48Zm11.825 8.389a.75.75 0 0 1 .864.614a11.07 11.07 0 0 1 0 3.686a.75.75 0 0 1-1.479-.25a9.571 9.571 0 0 0 0-3.186a.75.75 0 0 1 .615-.864Z"></path>
		</svg>
	);
}

export function UserIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<circle
				cx="12"
				cy="12"
				r="10"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<path
				d="M7.5 17C9.8317 14.5578 14.1432 14.4428 16.5 17M14.4951 9.5C14.4951 10.8807 13.3742 12 11.9915 12C10.6089 12 9.48797 10.8807 9.48797 9.5C9.48797 8.11929 10.6089 7 11.9915 7C13.3742 7 14.4951 8.11929 14.4951 9.5Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	);
}

export function TimesheetIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M8.37574 3C8.16183 3.07993 7.95146 3.16712 7.74492 3.26126M20.7177 16.3011C20.8199 16.0799 20.9141 15.8542 21 15.6245M18.4988 19.3647C18.6705 19.2044 18.8365 19.0381 18.9963 18.866M15.2689 21.3723C15.463 21.2991 15.6541 21.22 15.8421 21.1351M12.156 21.9939C11.9251 22.0019 11.6926 22.0019 11.4616 21.9939M7.78731 21.1404C7.96811 21.2217 8.15183 21.2978 8.33825 21.3683M4.67255 18.9208C4.80924 19.0657 4.95029 19.2064 5.0955 19.3428M2.6327 15.6645C2.70758 15.8622 2.78867 16.0569 2.87572 16.2483M2.00497 12.5053C1.99848 12.2972 1.9985 12.0878 2.00497 11.8794M2.62545 8.73714C2.69901 8.54165 2.77864 8.34913 2.8641 8.1598M4.65602 5.47923C4.80068 5.32514 4.95025 5.17573 5.1045 5.03124"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5M13.5 12H16M12 10.5V6"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M22 12C22 6.47715 17.5228 2 12 2"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	);
}

export function DocumentIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M16 17L9 17"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M16 13L13 13"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20.5 14C20.5 17.7712 20.5 19.6569 19.2552 20.8284C18.0104 22 16.0069 22 12 22H11.2273C7.96607 22 6.33546 22 5.20307 21.2022C4.87862 20.9736 4.59058 20.7025 4.3477 20.3971C3.5 19.3313 3.5 17.7966 3.5 14.7273V12.1818C3.5 9.21865 3.5 7.73706 3.96894 6.55375C4.72281 4.65142 6.31714 3.15088 8.33836 2.44135C9.59563 2 11.1698 2 14.3182 2C16.1173 2 17.0168 2 17.7352 2.2522C18.8902 2.65765 19.8012 3.5151 20.232 4.60214C20.5 5.27832 20.5 6.12494 20.5 7.81818V14Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinejoin="round"
			/>
			<path
				d="M3.5 12C3.5 10.1591 4.99238 8.66667 6.83333 8.66667C7.49912 8.66667 8.28404 8.78333 8.93137 8.60988C9.50652 8.45576 9.95576 8.00652 10.1099 7.43136C10.2833 6.78404 10.1667 5.99912 10.1667 5.33333C10.1667 3.49238 11.6591 2 13.5 2"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export function HelpIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
				stroke="#141B34"
				strokeWidth="1.5"
			/>
			<path
				d="M10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 9.39815 13.8837 9.76913 13.6831 10.0808C13.0854 11.0097 12 11.8954 12 13V13.5"
				stroke="#141B34"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M11.992 17H12.001"
				stroke="#141B34"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export function CommunityIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			{...props}>
			<path
				d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<path
				d="M20 5.69899C19.0653 5.76636 17.8681 6.12824 17.0379 7.20277C15.5385 9.14361 14.039 9.30556 13.0394 8.65861C11.5399 7.6882 12.8 6.11636 11.0401 5.26215C9.89313 4.70542 9.73321 3.19045 10.3716 2"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinejoin="round"
			/>
			<path
				d="M2 11C2.7625 11.6621 3.83046 12.2682 5.08874 12.2682C7.68843 12.2682 8.20837 12.7649 8.20837 14.7518C8.20837 16.7387 8.20837 16.7387 8.72831 18.2288C9.06651 19.1981 9.18472 20.1674 8.5106 21"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinejoin="round"
			/>
			<path
				d="M22 13.4523C21.1129 12.9411 20 12.7308 18.8734 13.5405C16.7177 15.0898 15.2314 13.806 14.5619 15.0889C13.5765 16.9775 17.0957 17.5711 14 22"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export function CalendarTimeOff(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			{...props}>
			<path
				d="M11 13H16M8 13H8.00898M13 17H8M16 17H15.991"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M18 2V4M6 2V4"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3 8H21"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export function CalendarIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			{...props}>
			<path
				d="M18 2V4M6 2V4"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10 17L9.99999 13.3472C9.99999 13.1555 9.86325 13 9.69458 13H9M13.6297 17L14.9842 13.3492C15.0475 13.1785 14.9128 13 14.7207 13H13"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M6 8H18"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export function AppVersionIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<path
				d="M12.0025 7.03857L12.0025 14.0889M12.0025 14.0889C12.3286 14.0933 12.6503 13.8691 12.8876 13.5956L14.4771 11.8129M12.0025 14.0889C11.6879 14.0847 11.3693 13.8618 11.1174 13.5955L9.51864 11.8129M7.98633 17.0386L15.9863 17.0386"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	);
}

export function InboxIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M21.5 13.5H16.5743C15.7322 13.5 15.0706 14.2036 14.6995 14.9472C14.2963 15.7551 13.4889 16.5 12 16.5C10.5111 16.5 9.70373 15.7551 9.30054 14.9472C8.92942 14.2036 8.26777 13.5 7.42566 13.5H2.5"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export function HomeIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M21 19v-6.733a4 4 0 0 0-1.245-2.9L13.378 3.31a2 2 0 0 0-2.755 0L4.245 9.367A4 4 0 0 0 3 12.267V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2Z"></path>
		</svg>
	);
}

export function Chevron(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			viewBox="0 0 15 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
				fill="currentColor"
				fillRule="evenodd"
				clipRule="evenodd"></path>
		</svg>
	);
}

export function EnergyIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			{...props}
			fill="currentColor"
			viewBox="0 0 20 20">
			<path d="M9.458 11.292v2.77c0 .237.118.386.354.448.237.063.41-.017.521-.239l2.5-4.896a.419.419 0 0 0-.01-.448.446.446 0 0 0-.406-.219h-1.75V5.875c0-.236-.115-.382-.344-.437-.23-.056-.4.02-.511.229l-2.624 4.958a.416.416 0 0 0 .01.448c.09.146.218.219.385.219h1.875ZM10 18.333a8.119 8.119 0 0 1-3.25-.656 8.41 8.41 0 0 1-2.646-1.781 8.412 8.412 0 0 1-1.781-2.646A8.118 8.118 0 0 1 1.667 10c0-1.153.219-2.236.656-3.25a8.412 8.412 0 0 1 1.781-2.646A8.412 8.412 0 0 1 6.75 2.323 8.118 8.118 0 0 1 10 1.667c1.153 0 2.236.219 3.25.656a8.412 8.412 0 0 1 2.646 1.781 8.41 8.41 0 0 1 1.781 2.646 8.119 8.119 0 0 1 .656 3.25 8.119 8.119 0 0 1-.656 3.25 8.41 8.41 0 0 1-1.781 2.646 8.41 8.41 0 0 1-2.646 1.781 8.119 8.119 0 0 1-3.25.656Zm0-1.75c1.82 0 3.371-.642 4.656-1.927 1.285-1.285 1.927-2.837 1.927-4.656 0-1.82-.642-3.371-1.927-4.656C13.371 4.059 11.819 3.417 10 3.417c-1.82 0-3.371.642-4.656 1.927C4.059 6.629 3.417 8.181 3.417 10c0 1.82.642 3.371 1.927 4.656 1.285 1.285 2.837 1.927 4.656 1.927Z"></path>
		</svg>
	);
}

export function ChevronDown(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}>
			<path
				fill="currentColor"
				d="m15.146 12.354l-5.792 5.792a.5.5 0 0 1-.854-.353V6.207a.5.5 0 0 1 .854-.353l5.792 5.792a.5.5 0 0 1 0 .708Z"></path>
		</svg>
	);
}

export function Hashtag(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}>
			<g
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="1.5">
				<path
					strokeLinejoin="round"
					d="M11 7L8 17m8-10l-3 10m5-7H7m10 4H6"></path>
				<path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></path>
			</g>
		</svg>
	);
}

export function View(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}>
			<path
				fill="currentColor"
				d="M21 18H2v2h19v-2zm-2-8v4H4v-4h15m1-2H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm1-4H2v2h19V4z"></path>
		</svg>
	);
}

export function ArchiveIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M2 16C2 13.6611 2 12.4917 2.53647 11.6379C2.81621 11.1927 3.19267 10.8162 3.63789 10.5365C4.49167 10 5.66111 10 8 10H16C18.3389 10 19.5083 10 20.3621 10.5365C20.8073 10.8162 21.1838 11.1927 21.4635 11.6379C22 12.4917 22 13.6611 22 16C22 18.3389 22 19.5083 21.4635 20.3621C21.1838 20.8073 20.8073 21.1838 20.3621 21.4635C19.5083 22 18.3389 22 16 22H8C5.66111 22 4.49167 22 3.63789 21.4635C3.19267 21.1838 2.81621 20.8073 2.53647 20.3621C2 19.5083 2 18.3389 2 16Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20 10C20 8.59987 20 7.8998 19.7275 7.36502C19.4878 6.89462 19.1054 6.51217 18.635 6.27248C18.1002 6 17.4001 6 16 6H8C6.59987 6 5.8998 6 5.36502 6.27248C4.89462 6.51217 4.51217 6.89462 4.27248 7.36502C4 7.8998 4 8.59987 4 10"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M18 6C18 4.11438 18 3.17157 17.4142 2.58579C16.8284 2 15.8856 2 14 2H10C8.11438 2 7.17157 2 6.58579 2.58579C6 3.17157 6 4.11438 6 6"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M15 14C15 15.1046 14.1046 16 13 16H11C9.89543 16 9 15.1046 9 14"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	);
}

export function ProjectIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 36 36"
			{...props}>
			<path
				fill="currentColor"
				d="M14 4H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM6 14V6h8v8Z"
				className="clr-i-outline clr-i-outline-path-1"></path>
			<path
				fill="currentColor"
				d="M30 4h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-8 10V6h8v8Z"
				className="clr-i-outline clr-i-outline-path-2"></path>
			<path
				fill="currentColor"
				d="M14 20H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2ZM6 30v-8h8v8Z"
				className="clr-i-outline clr-i-outline-path-3"></path>
			<path
				fill="currentColor"
				d="M30 20h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2Zm-8 10v-8h8v8Z"
				className="clr-i-outline clr-i-outline-path-4"></path>
			<path
				fill="none"
				d="M0 0h36v36H0z"></path>
		</svg>
	);
}

export function InviteUser(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M2 21H17C17 16.9066 13.6421 13.5882 9.5 13.5882C5.35786 13.5882 2 16.9066 2 21Z"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<path
				d="M13.25 6.70588C13.25 8.75258 11.5711 10.4118 9.5 10.4118C7.42893 10.4118 5.75 8.75258 5.75 6.70588C5.75 4.65918 7.42893 3 9.5 3C11.5711 3 13.25 4.65918 13.25 6.70588Z"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<path
				d="M18.5 7.5V14.5M22 11L15 11"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export function Tasks(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}>
			<g
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2">
				<circle
					cx="12"
					cy="12"
					r="9"></circle>
				<path d="m15 10l-4 4l-2-2"></path>
			</g>
		</svg>
	);
}

export function NotificationIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 16 16"
			{...props}>
			<path
				fill="currentColor"
				d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742c-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6"></path>
		</svg>
	);
}

export function Notes(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}>
			<g
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5">
				<path d="m20.312 12.647l.517-1.932c.604-2.255.907-3.382.68-4.358a4 4 0 0 0-1.162-2.011c-.731-.685-1.859-.987-4.114-1.591c-2.255-.605-3.383-.907-4.358-.68a4 4 0 0 0-2.011 1.162c-.587.626-.893 1.543-1.348 3.209l-.244.905l-.517 1.932c-.605 2.255-.907 3.382-.68 4.358a4 4 0 0 0 1.162 2.011c.731.685 1.859.987 4.114 1.592c2.032.544 3.149.843 4.064.73c.1-.012.198-.03.294-.052a4 4 0 0 0 2.011-1.16c.685-.732.987-1.86 1.592-4.115Z"></path>
				<path
					d="M16.415 17.974a4 4 0 0 1-1.068 1.678c-.731.685-1.859.987-4.114 1.591s-3.383.907-4.358.679a4 4 0 0 1-2.011-1.161c-.685-.731-.988-1.859-1.592-4.114l-.517-1.932c-.605-2.255-.907-3.383-.68-4.358a4 4 0 0 1 1.162-2.011c.731-.685 1.859-.987 4.114-1.592c.426-.114.813-.218 1.165-.309"
					opacity=".5"></path>
				<path
					strokeLinecap="round"
					d="m11.777 10l4.83 1.294"></path>
				<path
					strokeLinecap="round"
					d="m11 12.898l2.898.776"
					opacity=".5"></path>
			</g>
		</svg>
	);
}

export function Reports(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}>
			<path
				fill="currentColor"
				d="M11.943 1.25H13.5a.75.75 0 0 1 0 1.5H12c-2.378 0-4.086.002-5.386.176c-1.279.172-2.05.5-2.62 1.069c-.569.57-.896 1.34-1.068 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386v-1.5a.75.75 0 0 1 1.5 0v1.557c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19Z"></path>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M15.25 5a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0ZM19 2.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5Z"
				clipRule="evenodd"></path>
			<path
				fill="currentColor"
				d="M13.75 10c0 .414.336.75.75.75h.69l-2.013 2.013a.25.25 0 0 1-.354 0l-1.586-1.586a1.75 1.75 0 0 0-2.474 0L6.47 13.47a.75.75 0 1 0 1.06 1.06l2.293-2.293a.25.25 0 0 1 .354 0l1.586 1.586a1.75 1.75 0 0 0 2.474 0l2.013-2.012v.689a.75.75 0 0 0 1.5 0V10a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75Z"></path>
		</svg>
	);
}

export function Flow(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}>
			<path
				fill="currentColor"
				d="M8 16.184V15.5c0-.848.512-1.595 1.287-2.047a7.008 7.008 0 0 1-1.822-1.131C6.561 13.136 6 14.26 6 15.5v.684A2.997 2.997 0 0 0 4 19c0 1.654 1.346 3 3 3s3-1.346 3-3a2.997 2.997 0 0 0-2-2.816zM7 20a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2zm9-12.185v.351c0 .985-.535 1.852-1.345 2.36a7.016 7.016 0 0 1 1.823 1.1C17.414 10.748 18 9.524 18 8.167v-.351A2.997 2.997 0 0 0 20 5c0-1.654-1.346-3-3-3s-3 1.346-3 3c0 1.302.839 2.401 2 2.815zM17 4a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1zm.935 12.164C17.525 13.251 15.024 11 12 11a4.004 4.004 0 0 1-3.92-3.209A3 3 0 0 0 10 5c0-1.654-1.346-3-3-3S4 3.346 4 5c0 1.326.87 2.44 2.065 2.836C6.475 10.749 8.976 13 12 13a4.004 4.004 0 0 1 3.92 3.209A3 3 0 0 0 14 19c0 1.654 1.346 3 3 3s3-1.346 3-3c0-1.326-.87-2.44-2.065-2.836zM7 4a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1zm10 16a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2z"></path>
		</svg>
	);
}

export function TeamCloud(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}>
			<g
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5">
				<path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77c.079.07.154.145.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14V6.95Z"></path>
				<path
					strokeLinecap="round"
					d="M12.952 11.885a2.447 2.447 0 0 1 1.51-.004m-4.415.972a1.86 1.86 0 0 0-.333-.03c-.946 0-1.714.712-1.714 1.589S8.768 16 9.714 16h4C14.977 16 16 15.052 16 13.882c0-.927-.643-1.714-1.538-2.001m-4.415.972a1.974 1.974 0 0 1-.142-.735c0-1.17 1.023-2.118 2.286-2.118c1.175 0 2.144.823 2.271 1.88m-4.415.973c.225.041.435.123.62.238"></path>
			</g>
		</svg>
	);
}

export function Record(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}>
			<path
				fill="currentColor"
				d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8m0 5a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"></path>
		</svg>
	);
}

export function Camera(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}>
			<g
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5">
				<circle
					cx="12"
					cy="13"
					r="3"></circle>
				<path d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.408 4.408 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697c0-3.065 0-4.597-.749-5.697a4.407 4.407 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.405 4.405 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364c0 3.064 0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21Z"></path>
				<path
					strokeLinecap="round"
					d="M19 10h-1"></path>
			</g>
		</svg>
	);
}

export function Trash(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}>
			<g
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5">
				<path
					strokeLinecap="round"
					d="M20.5 6h-17m15.333 2.5l-.46 6.9c-.177 2.654-.265 3.981-1.13 4.79c-.865.81-2.196.81-4.856.81h-.774c-2.66 0-3.991 0-4.856-.81c-.865-.809-.954-2.136-1.13-4.79l-.46-6.9M9.5 11l.5 5m4.5-5l-.5 5"></path>
				<path d="M6.5 6h.11a2 2 0 0 0 1.83-1.32l.034-.103l.097-.291c.083-.249.125-.373.18-.479a1.5 1.5 0 0 1 1.094-.788C9.962 3 10.093 3 10.355 3h3.29c.262 0 .393 0 .51.019a1.5 1.5 0 0 1 1.094.788c.055.106.097.23.18.479l.097.291A2 2 0 0 0 17.5 6"></path>
			</g>
		</svg>
	);
}
