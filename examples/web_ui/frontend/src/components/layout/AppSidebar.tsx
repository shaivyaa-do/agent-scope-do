import {
	BookText,
	BotMessageSquare,
	Cable,
	Calendars,
	Compass,
	KeyRound,
	LibraryBig,
	UserRound,
} from 'lucide-react';
import { useOnborda } from 'onborda';
import { useLocation, useNavigate } from 'react-router-dom';

import MCPSvg from '@/assets/images/mcp.svg?react';
import { CHAT_TOUR_NAME } from '@/components/tour/chatTourSteps';
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useTranslation } from '@/i18n/useI18n';

export function AppSidebar() {
	const navigate = useNavigate();
	const location = useLocation();
	const { t } = useTranslation();
	const { startOnborda } = useOnborda();
	const username = localStorage.getItem('username') || 'Admin';

	const handleStartTour = () => {
		if (!location.pathname.startsWith('/chat')) {
			sessionStorage.setItem('force_tour', '1');
			navigate('/chat');
		} else {
			startOnborda(CHAT_TOUR_NAME);
		}
	};

	return (
		<Sidebar
			collapsible="none"
			className="w-60 shrink-0 bg-[#f4f4f5] flex flex-col h-full select-none"
		>
			<SidebarHeader className="h-16 shrink-0 px-5 pt-2 flex flex-row items-center justify-between">
				<div
					className="flex items-center gap-2.5 cursor-pointer"
					onClick={() => navigate('/chat')}
				>
					<img
						src="/dataobserve.png"
						alt="DataObserve"
						className="h-6.5 w-auto object-contain"
					/>
				</div>
			</SidebarHeader>

			<SidebarContent className="flex-1 px-2.5 pt-4 pb-3 overflow-y-auto gap-4">
				{/* Workspace Group */}
				<SidebarGroup className="p-0">
					<SidebarGroupLabel className="text-[11px] font-medium tracking-wider text-[rgba(24,24,27,0.4)] uppercase px-2.5 mb-1.5">
						{t('common.workspace')}
					</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu className="gap-[6px]">
							<SidebarMenuItem key="chat">
								<SidebarMenuButton
									isActive={
										location.pathname === '/chat' ||
										location.pathname.startsWith('/chat/')
									}
									onClick={() => navigate('/chat')}
									className="gap-2.5 px-2.5 py-1.5 h-8.5 rounded-lg text-[13.5px] font-normal text-[rgba(24,24,27,0.7)] hover:text-[rgba(24,24,27,0.9)] transition-colors data-[active=true]:bg-white data-[active=true]:font-medium data-[active=true]:text-[rgba(24,24,27,0.9)] hover:bg-white/60"
								>
									<BotMessageSquare className="size-4 shrink-0 text-[rgba(24,24,27,0.6)]" />
									<span className="truncate">{t('common.chat')}</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem key="schedule">
								<SidebarMenuButton
									isActive={location.pathname === '/schedule'}
									onClick={() => navigate('/schedule')}
									className="gap-2.5 px-2.5 py-1.5 h-8.5 rounded-lg text-[13.5px] font-normal text-[rgba(24,24,27,0.7)] hover:text-[rgba(24,24,27,0.9)] transition-colors data-[active=true]:bg-white data-[active=true]:font-medium data-[active=true]:text-[rgba(24,24,27,0.9)] hover:bg-white/60"
								>
									<Calendars className="size-4 shrink-0 text-[rgba(24,24,27,0.6)]" />
									<span className="truncate">{t('common.schedule')}</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem key="channel">
								<SidebarMenuButton
									isActive={location.pathname === '/channel'}
									onClick={() => navigate('/channel')}
									className="gap-2.5 px-2.5 py-1.5 h-8.5 rounded-lg text-[13.5px] font-normal text-[rgba(24,24,27,0.7)] hover:text-[rgba(24,24,27,0.9)] transition-colors data-[active=true]:bg-white data-[active=true]:font-medium data-[active=true]:text-[rgba(24,24,27,0.9)] hover:bg-white/60"
								>
									<Cable className="size-4 shrink-0 text-[rgba(24,24,27,0.6)]" />
									<span className="truncate">{t('common.channel')}</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>

				{/* Integrations Group */}
				<SidebarGroup className="p-0">
					<SidebarGroupLabel className="text-[11px] font-medium tracking-wider text-[rgba(24,24,27,0.4)] uppercase px-2.5 mb-1.5">
						{t('common.integrations')}
					</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu className="gap-[6px]">
							<SidebarMenuItem key="credential">
								<SidebarMenuButton
									isActive={location.pathname === '/credential'}
									onClick={() => navigate('/credential')}
									className="gap-2.5 px-2.5 py-1.5 h-8.5 rounded-lg text-[13.5px] font-normal text-[rgba(24,24,27,0.7)] hover:text-[rgba(24,24,27,0.9)] transition-colors data-[active=true]:bg-white data-[active=true]:font-medium data-[active=true]:text-[rgba(24,24,27,0.9)] hover:bg-white/60"
								>
									<KeyRound className="size-4 shrink-0 text-[rgba(24,24,27,0.6)]" />
									<span className="truncate">{t('common.credential')}</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem key="mcp">
								<SidebarMenuButton
									isActive={location.pathname.startsWith('/mcp')}
									onClick={() => navigate('/mcp')}
									className="gap-2.5 px-2.5 py-1.5 h-8.5 rounded-lg text-[13.5px] font-normal text-[rgba(24,24,27,0.7)] hover:text-[rgba(24,24,27,0.9)] transition-colors data-[active=true]:bg-white data-[active=true]:font-medium data-[active=true]:text-[rgba(24,24,27,0.9)] hover:bg-white/60"
								>
									<MCPSvg className="size-4 shrink-0 text-[rgba(24,24,27,0.6)]" />
									<span className="truncate">{t('common.mcp-hub')}</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem key="skill">
								<SidebarMenuButton
									isActive={location.pathname.startsWith('/skill')}
									onClick={() => navigate('/skill')}
									className="gap-2.5 px-2.5 py-1.5 h-8.5 rounded-lg text-[13.5px] font-normal text-[rgba(24,24,27,0.7)] hover:text-[rgba(24,24,27,0.9)] transition-colors data-[active=true]:bg-white data-[active=true]:font-medium data-[active=true]:text-[rgba(24,24,27,0.9)] hover:bg-white/60"
								>
									<BookText className="size-4 shrink-0 text-[rgba(24,24,27,0.6)]" />
									<span className="truncate">{t('common.skill-hub')}</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem key="knowledge">
								<SidebarMenuButton
									isActive={location.pathname === '/knowledge'}
									onClick={() => navigate('/knowledge')}
									className="gap-2.5 px-2.5 py-1.5 h-8.5 rounded-lg text-[13.5px] font-normal text-[rgba(24,24,27,0.7)] hover:text-[rgba(24,24,27,0.9)] transition-colors data-[active=true]:bg-white data-[active=true]:font-medium data-[active=true]:text-[rgba(24,24,27,0.9)] hover:bg-white/60"
								>
									<LibraryBig className="size-4 shrink-0 text-[rgba(24,24,27,0.6)]" />
									<span className="truncate">{t('common.knowledge')}</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>

			{/* System Footer */}
			<SidebarFooter className="p-2.5">
				<SidebarGroup className="p-0">
					<SidebarGroupLabel className="text-[11px] font-medium tracking-wider text-[rgba(24,24,27,0.4)] uppercase px-2.5 mb-1.5">
						{t('common.system')}
					</SidebarGroupLabel>
					<SidebarMenu className="gap-[6px]">
						<SidebarMenuItem key="tour">
							<SidebarMenuButton
								onClick={handleStartTour}
								className="gap-2.5 px-2.5 py-1.5 h-8.5 rounded-lg text-[13.5px] font-normal text-[rgba(24,24,27,0.7)] hover:text-[rgba(24,24,27,0.9)] hover:bg-white/60 transition-colors"
							>
								<Compass className="size-4 shrink-0 text-[rgba(24,24,27,0.6)]" />
								<span className="truncate">{t('tour.trigger')}</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
						<SidebarMenuItem key="settings">
							<SidebarMenuButton
								isActive={location.pathname === '/setup'}
								onClick={() => navigate('/setup')}
								className="gap-2.5 px-2.5 py-1.5 h-8.5 rounded-lg text-[13.5px] font-normal text-[rgba(24,24,27,0.7)] hover:text-[rgba(24,24,27,0.9)] transition-colors data-[active=true]:bg-white data-[active=true]:font-medium data-[active=true]:text-[rgba(24,24,27,0.9)] hover:bg-white/60"
							>
								<UserRound className="size-4 shrink-0 text-[rgba(24,24,27,0.6)]" />
								<span className="truncate">{t('common.settings')}</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarGroup>

				{/* User Profile */}
				<div
					className="flex items-center gap-2.5 px-3 py-2 mt-2 rounded-xl bg-white cursor-pointer hover:bg-white/90 transition-colors"
					onClick={() => navigate('/setup')}
				>
					<div className="size-6.5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[11px] font-semibold uppercase shrink-0">
						{username.slice(0, 1)}
					</div>
					<div className="flex flex-col min-w-0">
						<span className="text-[13px] font-medium text-[rgba(24,24,27,0.85)] truncate">{username}</span>
						<span className="text-[11.5px] font-normal text-[rgba(24,24,27,0.45)] truncate">{t('common.settings')}</span>
					</div>
				</div>
			</SidebarFooter>
		</Sidebar>
	);
}
