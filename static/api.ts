export type userData = {
  id: string;
  name: string;
  current_level: number;
  is_admin: boolean;
  is_disqualified: boolean;
  last_question_answered_at: number;
  has_verified_email: boolean;
  secure_data?: { email: string; school: string; ig_user_id?: string };
};
type Error = { error: string; reason?: string };
type APIResponse<R> = { data: R };
export namespace ApiRoutes {
  export namespace user {
    export namespace authenticate {
      export interface request {
        user: string;
        password: string;
      }
      export interface response {
        error: Error;
        success: APIResponse<userData>;
      }
    }
  }
}
