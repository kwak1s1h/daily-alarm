export class TeamInfoDto {
    members?: TeamInfoDto.Member[];
    team?: TeamInfoDto.Team;
    score?: string;
    reports?: TeamInfoDto.ReportInfo[];
    points?: TeamInfoDto.PointInfo[];

    /**
     * Generate Request URL
     * @param id Team ID
     * @returns API URL
     */
    static url(id: number) {
        return `https://ggm.gondr.net/api/team/${id}`;
    }
}
namespace TeamInfoDto {

    export interface Member {
        id: number,
        team_id: number,
        user_id: number,
        owner: number,
        created_at: string,
        updated_at: string,
        name: string,
        email: string,
        profile: string,
        info: string,
        level: number,
        exp: number,
        circle_id: any,
        github: string,
    }
    
    export interface Team {
        id: number,
        name: string,
        project_name: string,
        year: number,
        created_at: string,
        updated_at: string,
        github: string,
        score: number,
        doc_url: string,
        color: string,
    }
    
    export interface ReportInfo {
        id: number,
        team_id: number,
        user_id: number,
        content: string,
        category: string,
        score: number,
        created_at: string,
        updated_at: string,
        record_day: string,
        file: string,
    }
    
    export interface PointInfo {
        id: number,
        team_id: number,
        point: number,
        info: string,
        created_at: string,
        updated_at: string,
    }
}
